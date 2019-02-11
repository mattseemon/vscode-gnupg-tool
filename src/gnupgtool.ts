import * as vscode from 'vscode';
import * as fs from 'fs';
import { call, encrypt, decrypt } from 'gpg';
import * as child_process from 'child_process';
import { ExecOptions } from 'child_process';
import { GnuPGKey } from './gnupgkey';

export function checkGnuPG() {
  promise_checkVersion()
    .then(stdout => promise_extractVersions(stdout))
    .then(version => vscode.window.showInformationMessage('GnuPG: gpg --version -> ' + version))
    .catch(err => vscode.window.showErrorMessage('GnuPG: gpg not available !'));
}

export function listRecipients() {
  promise_listRecipients()
    .then(stdout => promise_readKeys(stdout))
    .then(keys => promise_KeysToText(keys))
    .then(recipients => showRecipients(recipients))
    .catch(() => {
      vscode.window.showErrorMessage('GnuPG list recipients failed ! ');
    });
}

export function showSmartcard() {
  promise_showSmartcard()
    .then(stdout => showSmartcardContent(stdout))
    .catch(() => {
      vscode.window.showErrorMessage('GnuPG show smartcard failed ! ');
    });
}

export function encryptSelection(editor: vscode.TextEditor) {
  if (editor) {
    const selection = editor.selection;
    const content = editor.document.getText(selection);

    if (content && content.length > 0) {
      promise_listRecipients()
        .then(stdout => promise_readKeys(stdout))
        .then(keys => promise_RecipientsToOptions(keys))
        .then(options =>
          vscode.window.showQuickPick(options, { placeHolder: 'Select recipients ...', canPickMany: true })
        )
        .then(recipients => promise_encrypt(content, recipients))
        .then(encrypted => {
          if (encrypted !== undefined) {
            editor.edit(edit => edit.replace(selection, encrypted));
          }
        })
        .catch(err => vscode.window.showErrorMessage('GnuPG encryption failed !'));
    } else {
      vscode.window.showWarningMessage('No text selected for GnuPG encryption.');
    }
  }
}

export function encryptFile(fileUri: vscode.Uri) {

  if (typeof fileUri === 'undefined' || !(fileUri instanceof vscode.Uri)) {
    return;
  }

  //already encrpyted, show as normal text file
  if (fileUri.scheme === 'file' && fileUri.fsPath.endsWith('.asc')) {
    //toggle with actual file
    var filePath = fileUri.fsPath; //getPhysicalPath(fileUri);
    //already opened
    for (const editor of vscode.window.visibleTextEditors) {
      if (editor.document.uri.fsPath === filePath) {
        vscode.window.showTextDocument(editor.document, editor.viewColumn);
        return;
      }
    }

    //open text file in new editor
    vscode.commands.executeCommand('vscode.open', vscode.Uri.file(filePath));
  } else {
    encryptFilePath(fileUri.fsPath);
  }
}

export function decryptSelection(editor: vscode.TextEditor) {
  if (editor) {
    const selection = editor.selection;
    const content = editor.document.getText(selection);

    if (content && content.length > 0) {
      promise_decrypt(content)
        .then(decrypted => {
          if (decrypted !== undefined) {
            editor.edit(edit => edit.replace(selection, decrypted));
          }
        })
        .catch(err => vscode.window.showErrorMessage('GnuPG decryption failed !'));
    } else {
      vscode.window.showWarningMessage('No text selected for GnuPG decryption.');
    }
  }
}

export function decryptFile(fileUri: vscode.Uri) {

  // no uri, no active editor
  if (typeof fileUri === 'undefined' || !(fileUri instanceof vscode.Uri)) {
    if (vscode.window.activeTextEditor === undefined) {
      vscode.commands.executeCommand('extension.decryptPath');
      return;
    }
    fileUri = vscode.window.activeTextEditor.document.uri;
  }

  if (fileUri.scheme === 'file') {
  //  //toggle with actual file
  //  var filePath = getPhysicalPath(fileUri);
  //  for (const editor of vscode.window.visibleTextEditors) {
  //    if (editor.document.uri.fsPath === filePath) {
  //      vscode.window.showTextDocument(editor.document, editor.viewColumn);
  //      return;
  //    }
  //  }
  //
  //  vscode.commands.executeCommand('vscode.open', vscode.Uri.file(filePath));
  //} else {
    decryptFilePath(fileUri.fsPath);
  }
}

export function endSession() {
  promise_killgpgagent()
    .then(() => vscode.window.showInformationMessage('GnuPG session ended.'))
    .catch(err => vscode.window.showErrorMessage('GnuPG end session failed !'));
}

function promise_checkVersion(): Promise<string> {
  return new Promise(function(resolve, reject) {
    var args = ['--version'];

    call('', args, (err: string, result: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.toString());
      }
    });
  });
}

function promise_listRecipients(): Promise<string> {
  // List options
  //var args = ['--list-keys', '--fixed-list-mode', '--fingerprint', '--with-colons'];

  // output in utf8
  //return GnuPGTool.execp('gpg -k --with-colons', {}).then(value => {
  //  return GnuPGTool.gnuPG_readKeys(value.stdout);
  //});

  return new Promise(function(resolve, reject) {
    var args = ['-k', '--with-colons'];

    call('', args, (err: string, result: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.toString());
      }
    });
  });
}

function promise_readKeys(stdout: string): Promise<Map<string, GnuPGKey>> {
  //see source: gnupg-2.2.12\doc\DETAILS

  return new Promise((resolve, reject) => {
    let lines = stdout
      .toString()
      .trim()
      .split(/(\r\n|\n)/g);

    let keys = new Map<string, GnuPGKey>();
    let key: GnuPGKey | null = null;

    for (var i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const record = line.split(':');

      //pub :: Public key
      //crt :: X.509 certificate
      //crs :: X.509 certificate and private key available
      //sub :: Subkey (secondary key)
      //sec :: Secret key
      //ssb :: Secret subkey (secondary key)
      //uid :: User id
      //uat :: User attribute (same as user id except for field 10).
      //sig :: Signature
      //rev :: Revocation signature
      //rvs :: Revocation signature (standalone) [since 2.2.9]
      //fpr :: Fingerprint (fingerprint is in field 10)
      //pkd :: Public key data [*]
      //grp :: Keygrip
      //rvk :: Revocation key
      //tfs :: TOFU statistics [*]
      //tru :: Trust database information [*]
      //spk :: Signature subpacket [*]
      //cfg :: Configuration data [*]
      switch (record[0]) {
        case 'pub':
          //#region Details pub Record:

          //record[0]: Type of record
          //record[1]: Validity
          //record[2]: Key length
          //record[3]: Public key algorithm
          //record[4]: KeyID
          //record[5]: Creation date
          //record[6]: Expiration date
          //record[7]: Certificate S/N, UID hash, trust signature info
          //record[8]: Ownertrust
          //record[9]: User-ID
          //record[10]: Signature class
          //record[11]: Key capabilities
          //record[12]: Issuer certificate fingerprint or other info
          //record[13]: Flag field
          //record[14]: S/N of a token
          //record[15]: Hash algorithm
          //record[16]: Curve name
          //record[17]: Compliance flags
          //record[18]: Last update
          //record[19]: Origin
          //record[20]: Comment

          //#endregion

          // Add previous key, if exists
          if (key !== null && !keys.has(key.keyId)) {
            keys.set(key.keyId, key);
          }

          //create new key
          key = new GnuPGKey();
          (key.keyId = record[4]),
            (key.expiration = record[6]),
            (key.capabilities = record[11]),
            (key.validity = record[1]);

          break;
        case 'fpr':
          //#region Details fpr Record

          //record[9]: fingerprint

          //#endregion

          // Fingerprint contains keyId
          if (key !== null && record[9].endsWith(key.keyId)) {
            key.fingerprint = record[9];
          }
          break;

        case 'uid':
          //#region Details uid Record

          //record[9]: userid

          //#endregion

          // User Id: name email
          if (key !== null) {
            key.userId = record[9];
          }
          break;
      }
    }

    // Add last key
    if (key !== null && !keys.has(key.keyId)) {
      keys.set(key.keyId, key);
    }

    // resolve, reject
    if (keys.size > 0) {
      resolve(keys);
    } else {
      reject();
    }
  });
}

function promise_encrypt(selectedText: string, recipients?: { name: string; email: string }[]): Promise<string> {
  return new Promise((resolve, reject) => {
    let args = ['--armor'];

    if (recipients !== undefined) {
      recipients.forEach(recipient => {
        args = args.concat(['--recipient', recipient.name]); // + ' <' + recipient.email + '>';
      });
    }

    encrypt(selectedText, args, (err: string, result: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.toString());
      }
    });
  });
}

function promise_decrypt(selectedText: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let args = ['--decrypt'];

    decrypt(selectedText, args, (err: string, result: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.toString());
      }
    });
  });
}

function promise_showSmartcard(): Promise<string> {
  return new Promise((resolve, reject) => {
    var args = ['--card-status'];

    call('', args, (err: string, result: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.toString());
      }
    });
  });
}

function promise_killgpgagent(): Promise<{ stdout: string; stderr: string }> {
  //https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPG_002dAGENT.html
  //https://www.gnupg.org/documentation/manuals/gnupg/Controlling-gpg_002dconnect_002dagent.html#Controlling-gpg_002dconnect_002dagent
  //gpgconf --kill gpg-agent: works on Windows
  //gpg-connect-agent killagent /bye
  return promise_exec('gpg-connect-agent killagent /bye', {});
}

function promise_extractVersions(stdout: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let versions = '';

    let lines = stdout
      .toString()
      .trim()
      .split(/(\r\n|\n)/g);

    if (lines.length >= 2) {
      versions = lines[0] + ', ' + lines[2];
    }

    resolve(versions);
  });
}

function promise_exec(cmd: string, opts: ExecOptions): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    const cp = child_process.exec(cmd, opts, (err, stdout, stderr) =>
      err
        ? reject(err)
        : resolve({
            stdout: stdout,
            stderr: stderr
          })
    );
  });
}

function promise_RecipientsToOptions(
  keys: Map<string, GnuPGKey>
): Promise<{ label: string; description: string; detail: string; name: string; email: string }[]> {
  return new Promise((resolve, reject) => {
    const arr = Array.from(keys.values())
      .filter(k => !k.isDisabled && k.canEncrypt)
      .map(k => ({
        label: k.name,
        description: k.email,
        detail: k.fingerprint + ', ' + k.validityDescription,
        name: k.name,
        email: k.email,
        validity: k.validity
      }));

    arr ? resolve(arr) : reject();
  });
}

function promise_KeysToText(keys: Map<string, GnuPGKey>): Promise<string[]> {
  return new Promise((resolve, reject) => {
    let recipients: string[] = [];

    keys.forEach(key => {
      recipients.push(key.toString());
    });

    recipients.length > 0 ? resolve(recipients) : reject();
  });
}

function showRecipients(recipients: string[]) {
  let content = 'GnuPG Recipients:\r\n';

  //content += '\r\n';
  //content += '  fingerprint     : name <email>, capabilities (D:disabled, S:sign, C:certify, E: encrypt), validity\r\n';
  content += '\r\n';

  recipients.forEach(r => (content += '- ' + r.toString() + '\r\n'));

  vscode.workspace.openTextDocument({ content: content, language: 'txt' }).then((doc: vscode.TextDocument) => {
    return vscode.window.showTextDocument(doc, { preview: true });
  });
}

function showSmartcardContent(stdout: string) {
  let content = stdout;

  vscode.workspace.openTextDocument({ content: content, language: 'txt' }).then((doc: vscode.TextDocument) => {
    return vscode.window.showTextDocument(doc, { preview: true });
  });
}

function encryptFilePath(filePath: string) {

  // check filePath ...
  if ((typeof filePath === 'undefined')|| !fs.existsSync(filePath)) {
    return;
  }

  // change scheme for content provider
  let fileUri = vscode.Uri.file(filePath.concat('.asc'));
  let newUri = fileUri.with({ scheme: 'gpg-encrypt' });

  // go on to content provider ...
  vscode.commands.executeCommand('vscode.open', newUri);
}

function decryptFilePath(filePath: string) {

  // check filePath ...
  if ((typeof filePath === 'undefined')|| !fs.existsSync(filePath)) {
    return;
  }

  // change scheme for content provider
  let fileUri = vscode.Uri.file(filePath.concat('.decrypted'));
  let newUri = fileUri.with({ scheme: 'gpg-decrypt' });

  // go on to content provider ...
  vscode.commands.executeCommand('vscode.open', newUri);
}