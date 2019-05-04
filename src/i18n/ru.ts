import { Ii18n } from '../i18n';

const translation: Ii18n = {
  CommandCheckGnuPG: 'Проверьте GnuPG',
  CommandDecrypt: 'Decrypt ...',
  CommandDecryptFile: 'Расшифровать файл',
  CommandDecryptPreview: 'Предварительный просмотр расшифрованного файла',
  CommandDecryptSelection: 'Расшифровать выбор',
  CommandEncrypt: 'Encrypt ...',
  CommandEncryptFileAsym: 'Зашифровать файл с получателями',
  CommandEncryptFileSymm: 'Зашифровать файл с парольной фразой',
  CommandEncryptPreviewAsym: 'Предварительный просмотр зашифрованного файла с получателями',
  CommandEncryptPreviewSymm: 'Предварительный просмотр зашифрованного файла с парольной фразой',
  CommandEncryptSelectionAsym: 'Шифрование выбора с получателями',
  CommandEncryptSelectionSymm: 'Зашифровать выделение парольной фразой',
  CommandEndSession: 'Конец сессии',
  CommandEnvironment: 'Environment ...',
  CommandExportPublicKeys: 'Экспорт открытых ключей',
  CommandExportSecretKeys: 'Экспорт секретных ключей',
  CommandExportSecretSubKeys: 'Экспорт секретных суб-ключей',
  CommandImportKeys: 'Ключи импорта',
  CommandListPublicKeys: 'Список открытых ключей',
  CommandListSecretKeys: 'Список секретных ключей',
  CommandShowSmartcard: 'Показать Smartcard',
  CommandSignFile: 'Файл подписи',
  CommandTrust: 'Trust ...',
  CommandVerifyFile: 'Проверить файл',
  Decrypted: 'расшифрованный',
  Encrypted: 'зашифрованная',
  GnuPGCopyFingerprintToClipboardFailed: 'Copy Fingerprint to Clipboard failed',
  GnuPGDecryptionFailed: 'GnuPG: Расшифровка не удалась!',
  GnuPGDeleteKeyFailed: 'GnuPG: Delete Public key failed!',
  GnuPGDeleteSecretKeyFailed: 'GnuPG: Delete Secret Key failed!',
  GnuPGEditPublicKeyFailed: 'GnuPG: Edit public key failed',
  GnuPGEncryptionFailed: 'GnuPG: Сбой шифрования!',
  GnuPGEndSessionFailed: 'GnuPG: Не удалось завершить сеанс!',
  GnuPGEndSessionSuccessfully: 'GnuPG: Сессия завершилась успешно.',
  GnuPGFileAlreadyEncrypted: 'GnuPG: Файл уже зашифрован (*.asc|*.gpg).',
  GnuPGFileDecryptedSuccessfully: 'GnuPG: Файл успешно расшифрован.',
  GnuPGFileEncryptedSuccessfully: 'GnuPG: Файл успешно зашифрован.',
  GnuPGFileIsAlreadyASignature: 'GnuPG: Файл уже подпись (*.sig).',
  GnuPGFileIsNotASignature: 'GnuPG: Файл не является подписью (*.sig).',
  GnuPGFileNotEncrypted: 'GnuPG: Файл не зашифрован (*.asc|*.gpg).',
  GnuPGFileSignedSuccessfully: 'GnuPG: Файл успешно подписан.',
  GnuPGGpgNotAvailable: 'GnuPG: gpg недоступен!',
  GnuPGKeyExportFailed: 'GnuPG: Не удалось экспортировать ключ!',
  GnuPGKeyExportSuccessfully: 'GnuPG: Ключ успешно экспортирован.',
  GnuPGKeyImportFailed: 'GnuPG: Не удалось импортировать ключ!',
  GnuPGKeyImportSuccessfully: 'GnuPG: Ключ успешно импортирован.',
  GnuPGNoRecipientsSelectedForEncryption: 'GnuPG: Не выбран получатель для шифрования.',
  GnuPGNoTextSelectedForDecryption: 'GnuPG: Не выбран текст для расшифровки.',
  GnuPGNoTextSelectedForEncryption: 'GnuPG: Не выбран текст для шифрования.',
  GnuPGNotSupportedPlatform: 'GnuPG: Not supported platform',
  GnuPGPublicKeyDeletedSuccessfully: 'GnuPG: Public Key delted successfully',
  GnuPGSecretKeyDeletedSuccessfully: 'GnuPG: Secret Key delted successfully',
  GnuPGSelectPublicKey: 'Select Public Key ...',
  GnuPGSignFailed: 'GnuPG: Не удалось подписать!',
  GnuPGVerfication: 'GnuPG: верификация',
  GnuPGVerficationFailed: 'GnuPG: Проверка не удалась!',
  SelectKeyToExport: 'Выберите ключ для экспорта ...',
  SelectRecipients: 'Выберите получателей ...',
  SelectSigner: 'Выберите подписавшего ...',
  Verified: 'проверенный'
};

export default translation;
