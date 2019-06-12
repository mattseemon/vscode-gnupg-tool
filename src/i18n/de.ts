import { Ii18n } from '../i18n';

const translation: Ii18n = {
  CommandCheckGnuPG: 'GnuPG überprüfen',
  CommandClearSignFile: 'Datei signieren (clear-sign)',
  CommandCopyFingerprintToClipboard: 'Fingerprint in die Zwischenablage kopieren',
  CommandCopyKeyIdToClipboard: 'KeyId in die Zwischenablage kopieren',
  CommandDecrypt: 'Entschlüsseln ...',
  CommandDecryptFile: 'Datei entschlüsseln',
  CommandDecryptPreview: 'Vorschau der entschlüsselten Datei',
  CommandDecryptSelection: 'Auswahl entschlüsseln',
  CommandDeletePublicKey: 'Öffentliche Schlüssel löschen',
  CommandDeleteSecretKey: 'Geheimen Schlüssel löschen',
  CommandEditPublicKey: 'Öffentlichen Schlüssel editieren (über Terminal)',
  CommandEncrypt: 'Verschlüsseln ...',
  CommandEncryptFileAsym: 'Datei für Empfänger verschlüsseln',
  CommandEncryptFileSymm: 'Datei mit Passphrase verschlüsseln',
  CommandEncryptPreviewAsym: 'Vorschau der verschlüsselten Datei für Empfänger',
  CommandEncryptPreviewSymm: 'Vorschau der verschlüsselten Datei mit Passphrase',
  CommandEncryptSelectionAsym: 'Auswahl für Empfänger verschlüsseln',
  CommandEncryptSelectionSymm: 'Auswahl mit Passphrase verschlüsseln',
  CommandEndSession: 'Sitzung beenden',
  CommandEnvironment: 'Umgebung ...',
  CommandExportPublicKeys: 'Öffentliche Schlüssel exportieren',
  CommandExportSecretKeys: 'Geheime Schlüssel exportieren',
  CommandExportSecretSubKeys: 'Geheime Sub-Schlüssel exportieren',
  CommandGenerateKey: 'Schlüssel erzeugen (über Terminal)',
  CommandKeys: 'Schlüssel ...',
  CommandImportKeys: 'Schlüssel importieren',
  CommandListPublicKeys: 'Öffentliche Schlüssel auflisten',
  CommandListSecretKeys: 'Geheime Schlüssel auflisten',
  CommandShowSmartcard: 'Smartcard anzeigen',
  CommandSignFile: 'Datei signieren (detach-sign)',
  CommandTrust: 'Vertrauen ...',
  CommandVerifyFile: 'Datei verifizieren',
  Decrypted: 'entschlüsselt',
  Encrypted: 'verschlüsselt',
  GnuPGCopyFingerprintToClipboardFailed: 'GnuPG: Kopieren des Fingerprints in die Zwischenablage ist fehlgeschlagen!',
  GnuPGCopyKeyIdToClipboardFailed: 'GnuPG: Kopieren der KeyId in die Zwischenablage ist fehlgeschlagen!',
  GnuPGDecryptionFailed: 'GnuPG: Entschlüsselung fehlgeschlagen!',
  GnuPGDeleteKeyFailed: 'GnuPG: Löschen des öffentlichen Schlüssels ist fehlgeschlagen!',
  GnuPGDeleteSecretKeyFailed: 'GnuPG: Löschen des geheimen Schlüssels ist fehlgeschlagen!',
  GnuPGEditPublicKeyFailed: 'Editieren des öffentlichen Schlüssel ist fehlgeschlagen!',
  GnuPGEncryptionFailed: 'GnuPG: Verschlüsselung fehlgeschlagen!',
  GnuPGEndSessionFailed: 'GnuPG: Beenden der Sitzung fehlgeschlagen!',
  GnuPGEndSessionSuccessfully: 'GnuPG: Sitzung erfolgreich beendet.',
  GnuPGFileAlreadyEncrypted: 'GnuPG: Datei bereits verschlüsselt (*.asc|*.gpg).',
  GnuPGFileDecryptedSuccessfully: 'GnuPG: Datei erfolgreich entschlüsselt.',
  GnuPGFileEncryptedSuccessfully: 'GnuPG: Datei erfolgreich verschlüsselt.',
  GnuPGFileIsAlreadyASignature: 'GnuPG: Datei ist bereits eine Signatur (*.sig).',
  GnuPGFileIsNotASignature: 'GnuPG: Datei ist keine Signatur (*.sig|*.asc).',
  GnuPGFileNotEncrypted: 'GnuPG: Datei nicht verschlüsselt (*.asc|*.gpg).',
  GnuPGFileSignedSuccessfully: 'GnuPG: Datei erfolgreich signiert.',
  GnuPGGpgNotAvailable: 'GnuPG: gpg nicht verfügbar!',
  GnuPGKeyExportFailed: 'GnuPG: Schlüsselexport fehlgeschlagen!',
  GnuPGKeyExportSuccessfully: 'GnuPG: Schlüsselexport erfolgreich.',
  GnuPGKeyImportFailed: 'GnuPG: Schlüsselimport fehlgeschlagen!',
  GnuPGKeyImportSuccessfully: 'GnuPG: Schlüsselimport erfolgreich.',
  GnuPGListPublicKeysFailed: 'GnuPG: Auflisten der öffentlichen Schlüssel fehlgeschlagen!',
  GnuPGListSecretKeysFailed: 'GnuPG: Auflisten der geheimen Schlüssel fehlgeschlagen!',
  GnuPGNotAvailable: 'GnuPG not available!',
  GnuPGNoRecipientsSelectedForEncryption: 'GnuPG: Kein Empfänger für die Verschlüsselung ausgewählt.',
  GnuPGNoTextSelectedForDecryption: 'GnuPG: Kein Text für Entschlüsselung ausgewählt.',
  GnuPGNoTextSelectedForEncryption: 'GnuPG: Kein Text für Verschlüsselung ausgewählt.',
  GnuPGNotSupportedPlatform: 'GnuPG: Plattform wird nicht unterstützt',
  GnuPGPublicKey: 'GnuPG Öffentliche Schlüssel',
  GnuPGPublicKeyDeletedSuccessfully: 'GnuPG: Öffentlichen Schlüssel erfolgreich gelöscht',
  GnuPGSecretKey: 'GnuPG Geheime Schlüssel',
  GnuPGSecretKeyDeletedSuccessfully: 'GnuPG: Geheimen Schlüssel erfolgreich gelöscht',
  GnuPGSelectPublicKey: 'Öffentlichen Schlüssel auswählen ...',
  GnuPGShowSmartcardFailed: 'GnuPG: Anzeigen der Smartcard fehlgeschlagen!',
  GnuPGSignFailed: 'GnuPG: Signieren fehlgeschlagen!',
  GnuPGSwitchToTerminalAndHitReturn: 'Wechsel ins Terminal und drücke <RETURN>',
  GnuPGTerminal: 'GnuPG Terminal',
  GnuPGUsingHomedir: 'GnuPG: Verwende homedir',
  GnuPGVerfication: 'GnuPG: Verifikation',
  GnuPGVerficationFailed: 'GnuPG: Verifikation fehlgeschlagen!',
  SelectKeyToExport: 'Schlüssel für Export auswählen ...',
  SelectRecipients: 'Empfänger auswählen ...',
  SelectSigner: 'Unterzeichner auswählen ...',
  Verified: 'verifiziert'
};

export default translation;
