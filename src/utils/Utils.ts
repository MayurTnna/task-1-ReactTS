import CryptoJS from "crypto-js";

const secret_key = "Hello World";

export function decryption(password: string): string {
  const bytes = CryptoJS.AES.decrypt(password, secret_key);
  const plainText = bytes.toString(CryptoJS.enc.Utf8);
  return plainText;
}

export function encryption(password: string): string {
  const cipherText = CryptoJS.AES.encrypt(password, secret_key).toString();
  return cipherText;
}
