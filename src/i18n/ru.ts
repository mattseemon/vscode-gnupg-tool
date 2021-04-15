import { Ii18n } from '../i18n';

const translation: Ii18n = {
  AllFiles: 'Все файлы',
  CommandCheckGnuPG: 'Проверьте GnuPG',
  CommandClearSignFile: 'Файл подписи (clear-sign)',
  CommandCopyFingerprintToClipboard: 'Скопировать отпечаток пальца в буфер обмена',
  CommandCopyKeyIdToClipboard: 'Скопировать KeyId в буфер обмена',
  CommandDecrypt: 'расшифровывать ...',
  CommandDecryptFile: 'Расшифровать файл',
  CommandDecryptPreview: 'Предварительный просмотр расшифрованного файла',
  CommandDecryptSelection: 'Расшифровать выбор',
  CommandDeletePublicKey: 'Удалить открытый ключ',
  CommandDeleteSecretKey: 'Удалить секретный ключ',
  CommandEditPublicKey: 'Изменить открытый ключ (через терминал)',
  CommandEncrypt: 'шифровать ...',
  CommandEncryptFileAsym: 'Зашифровать файл с получателями',
  CommandEncryptFileSymm: 'Зашифровать файл с парольной фразой',
  CommandEncryptPreviewAsym: 'Предварительный просмотр зашифрованного файла с получателями',
  CommandEncryptPreviewSymm: 'Предварительный просмотр зашифрованного файла с парольной фразой',
  CommandEncryptSelectionAsym: 'Шифрование выбора с получателями',
  CommandEncryptSelectionSymm: 'Зашифровать выделение парольной фразой',
  CommandEndSession: 'Конец сессии',
  CommandEnvironment: 'Среда ...',
  CommandExportPublicKeys: 'Экспорт открытых ключей',
  CommandExportSecretKeys: 'Экспорт секретных ключей',
  CommandExportSecretSubKeys: 'Экспорт секретных суб-ключей',
  CommandImportKeys: 'Ключи импорта',
  CommandGenerateKey: 'Создать ключ (через терминал)',
  CommandGitSetUserSigningKey: 'Git Set User.SigningKey',
  CommandGitUnsetUserSigningKey: 'Git Unset User.SigningKey',
  CommandKeys: 'Ключи ...',
  CommandListPublicKeys: 'Список открытых ключей',
  CommandListSecretKeys: 'Список секретных ключей',
  CommandShowSmartcard: 'Показать Smartcard',
  CommandSignFile: 'Файл подписи (detach-sign)',
  CommandTrust: 'Доверять ...',
  CommandVerifyFile: 'Проверить файл',
  Decrypted: 'расшифрованный',
  Encrypted: 'зашифрованная',
  GnuPGCopyFingerprintToClipboardFailed: 'GnuPG: Ошибка копирования отпечатка пальца в буфер обмена',
  GnuPGCopyKeyIdToClipboardFailed: 'GnuPG: Не удалось скопировать KeyId в буфер обмена!',
  GnuPGDecryptionFailed: 'GnuPG: Расшифровка не удалась!',
  GnuPGDeleteKeyFailed: 'GnuPG: Не удалось удалить открытый ключ!',
  GnuPGDeleteSecretKeyFailed: 'GnuPG: Ошибка удаления секретного ключа!',
  GnuPGEditPublicKeyFailed: 'GnuPG: Не удалось изменить открытый ключ',
  GnuPGEncryptionFailed: 'GnuPG: Сбой шифрования!',
  GnuPGEndSessionFailed: 'GnuPG: Не удалось завершить сеанс!',
  GnuPGEndSessionSuccessfully: 'GnuPG: Сессия завершилась успешно.',
  GnuPGFileAlreadyEncrypted: 'GnuPG: Файл уже зашифрован (*.asc|*.gpg).',
  GnuPGFileDecryptedSuccessfully: 'GnuPG: Файл успешно расшифрован.',
  GnuPGFileEncryptedSuccessfully: 'GnuPG: Файл успешно зашифрован.',
  GnuPGFileIsAlreadyASignature: 'GnuPG: Файл уже подпись (*.sig).',
  GnuPGFileIsNotASignature: 'GnuPG: Файл не является подписью (*.sig|*.asc).',
  GnuPGFileNotEncrypted: 'GnuPG: Файл не зашифрован (*.asc|*.gpg).',
  GnuPGFileSignedSuccessfully: 'GnuPG: Файл успешно подписан.',
  GnuPGGitSetUserSigningKeyFailed: '',
  GnuPGGitUnsetUserSigningKeyFailed: '',
  GnuPGGnuPGNotAvailable: 'GnuPG: GnuPG недоступен!',
  GnuPGKeyExportFailed: 'GnuPG: Не удалось экспортировать ключ!',
  GnuPGKeyExportSuccessfully: 'GnuPG: Ключ успешно экспортирован.',
  GnuPGKeyImportFailed: 'GnuPG: Не удалось импортировать ключ!',
  GnuPGKeyImportSuccessfully: 'GnuPG: Ключ успешно импортирован.',
  GnuPGListPublicKeysFailed: 'GnuPG: Список открытых ключей не удался!',
  GnuPGListSecretKeysFailed: 'GnuPG: Не удалось получить список секретных ключей!',
  GnuPGNotAvailable: 'GnuPG not available!',
  GnuPGNoRecipientsSelectedForEncryption: 'GnuPG: Не выбран получатель для шифрования.',
  GnuPGNoTextSelectedForDecryption: 'GnuPG: Не выбран текст для расшифровки.',
  GnuPGNoTextSelectedForEncryption: 'GnuPG: Не выбран текст для шифрования.',
  GnuPGFunctionIsNotSupportedWithVersion1x: 'GnuPG: Функция не поддерживается с gpg v1.x',
  GnuPGFunctionIsNotSupportedWithVersion2x: 'GnuPG: Функция не поддерживается с gpg v1.x',
  GnuPGNotSupportedPlatform: 'GnuPG: Не поддерживается платформа',
  GnuPGPublicKey: 'GnuPG Открытый ключ',
  GnuPGPublicKeyDeletedSuccessfully: 'GnuPG: Открытый ключ успешно удален',
  GnuPGSecretKey: 'GnuPG Секретный ключ',
  GnuPGSecretKeyDeletedSuccessfully: 'GnuPG: Секретный ключ успешно удален',
  GnuPGSelectPublicKey: 'Выберите открытый ключ ...',
  GnuPGSelectSigningKey: 'Select Signing Key ...',
  GnuPGShowSmartcardFailed: 'GnuPG: Показать смарт-карту не удалось!',
  GnuPGSignFailed: 'GnuPG: Не удалось подписать!',
  GnuPGSwitchToTerminalAndHitReturn: 'Переключитесь на терминал и нажмите <RETURN>',
  GnuPGTerminal: 'GnuPG терминал',
  GnuPGUsingHomedir: 'GnuPG: С помощью homedir',
  GnuPGVerfication: 'GnuPG: верификация',
  GnuPGVerficationFailed: 'GnuPG: Проверка не удалась!',
  SelectKeyToExport: 'Выберите ключ для экспорта ...',
  SelectRecipients: 'Выберите получателей ...',
  SelectSigner: 'Выберите подписавшего ...',
  Verified: 'проверенный',
};

export default translation;
