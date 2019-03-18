import en from './locale/en';
import de from './locale/de';

export interface ILocale{
  Decrypted: string;
  Encrypted: string;
  GnuPGDecryptionFailed: string;
  GnuPGEncryptionFailed: string;
  GnuPGEndSessionFailed: string;
  GnuPGEndSessionSuccessfully: string;
  GnuPGFileAlreadyEncrypted: string;
  GnuPGFileDecryptedSuccessfully: string;
  GnuPGFileEncryptedSuccessfully: string;
  GnuPGFileIsAlreadyASignature: string;
  GnuPGFileIsNotASignature: string;
  GnuPGFileNotEncrypted: string;
  GnuPGFileSignedSuccessfully: string;
  GnuPGGpgNotAvailable: string;
  GnuPGKeyExportFailed: string;
  GnuPGKeyExportSuccessfully: string;
  GnuPGKeyImportFailed: string;
  GnuPGKeyImportSuccessfully: string;
  GnuPGNoRecipientsSelectedForEncryption: string;
  GnuPGNoTextSelectedForDecryption: string;
  GnuPGNoTextSelectedForEncryption: string;
  GnuPGSignFailed: string;
  GnuPGVerfication: string;
  GnuPGVerficationFailed: string;
  SelectKeyToExport: string;
  SelectRecipients: string;
  SelectSigner: string;
  Verified: string;
}

export function locale(): ILocale {

  let curr: ILocale;
  let config: { locale: string } = { locale: 'en' };

  if (process.env.VSCODE_NLS_CONFIG) {
    let VSCODE_NLS_CONFIG = process.env.VSCODE_NLS_CONFIG;
    config = JSON.parse(VSCODE_NLS_CONFIG);
  }

  switch (config.locale) {
    case 'en':
      curr = en;
      break;

    case 'de':
      curr = de;
      break;

    default:
      curr = en;
  }

  return curr;
}
