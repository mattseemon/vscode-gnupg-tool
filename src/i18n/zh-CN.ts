import { Ii18n } from "../i18n";

const translation: Ii18n = {
  CommandEnvironment: 'Environment ...',
  CommandEncrypt: 'Encrypt ...',
  CommandDecrypt: 'Decrypt ...',
  CommandTrust: 'Trust ...',
  CommandCheckGnuPG: '检查 GnuPG',
  CommandListPublicKeys: '列出公钥',
  CommandListSecretKeys: '列出密钥',
  CommandShowSmartcard: '显示 Smartcard',
  CommandEndSession: '结束会议',
  CommandEncryptSelectionAsym: '使用收件人加密选择',
  CommandEncryptSelectionSymm: '使用密码短语加密选择',
  CommandEncryptFileAsym: '使用收件人加密文件',
  CommandEncryptFileSymm: '使用密码短语加密文件',
  CommandEncryptPreviewAsym: '使用收件人预览加密文件',
  CommandEncryptPreviewSymm: '使用密码短语预览加密文件',
  CommandDecryptSelection: '解密选择',
  CommandDecryptFile: '解密文件',
  CommandDecryptPreview: '预览解密文件',
  CommandSignFile: '签名文件',
  CommandVerifyFile: '验证文件',
  CommandImportKeys: '导入密钥',
  CommandExportPublicKeys: '导出公钥',
  CommandExportSecretKeys: '导出密钥',
  CommandExportSecretSubKeys: '导出秘密子密钥',
  Decrypted: '解密',
  Encrypted: '加密',
  GnuPGDecryptionFailed: 'GnuPG: 解密失败了!',
  GnuPGEditPublicKeyFailed: 'Edit public key failed',
  GnuPGEncryptionFailed: 'GnuPG: 加密失败!',
  GnuPGEndSessionFailed: 'GnuPG: 结束会话失败!',
  GnuPGEndSessionSuccessfully: 'GnuPG: 会议成功结束.',
  GnuPGFileAlreadyEncrypted: 'GnuPG: 文件已加密 (*.asc|*.gpg).',
  GnuPGFileDecryptedSuccessfully: 'GnuPG: 文件解密成功.',
  GnuPGFileEncryptedSuccessfully: 'GnuPG: 文件加密成功.',
  GnuPGFileIsAlreadyASignature: 'GnuPG: 文件已经是签名 (*.sig).',
  GnuPGFileIsNotASignature: 'GnuPG: 文件不是签名 (*.sig).',
  GnuPGFileNotEncrypted: 'GnuPG: 文件未加密 (*.asc|*.gpg).',
  GnuPGFileSignedSuccessfully: 'GnuPG: 文件签名成功.',
  GnuPGGpgNotAvailable: 'GnuPG: gpg 无法使用!',
  GnuPGKeyExportFailed: 'GnuPG: 密钥导出失败!',
  GnuPGKeyExportSuccessfully: 'GnuPG: 密钥导出成功!',
  GnuPGKeyImportFailed: 'GnuPG: 密钥导入失败!',
  GnuPGKeyImportSuccessfully: 'GnuPG: 密钥导入成功!',
  GnuPGNoRecipientsSelectedForEncryption: 'GnuPG: 没有选择加密的收件人.',
  GnuPGNoTextSelectedForDecryption: 'GnuPG: 未选择任何文本进行解密.',
  GnuPGNoTextSelectedForEncryption: 'GnuPG: 未选择加密文本.',
  GnuPGSelectPublicKey: 'Select Public Key ...',
  GnuPGSignFailed: 'GnuPG: 签名失败!',
  GnuPGVerfication: 'GnuPG: 验证',
  GnuPGVerficationFailed: 'GnuPG: 验证失败!',
  SelectKeyToExport: '选择要导出的密钥 ...',
  SelectRecipients: '选择收件人 ...',
  SelectSigner: '选择签名者 ...',
  Verified: '验证'
};

export default translation;
