const CryptoJS = require("crypto-js")
const key = CryptoJS.enc.Utf8.parse('kaqer122s') // 密钥
const iv = CryptoJS.enc.Utf8.parse('kaqer122s') // 偏移量

// 解密密文
exports.decrypt = encryptText => {
  const parseEncryptText = CryptoJS.enc.Base64.stringify(encryptText)
  const decryptText = CryptoJS.AES.decrypt(parseEncryptText, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
  return decryptText.toString()
}