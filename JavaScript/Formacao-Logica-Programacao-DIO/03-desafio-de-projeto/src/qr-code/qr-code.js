// precisa importar a lib qrcode
import QRCode from 'qrcode';
export async function generateQRCode(text, outputPath) {
  // 1. chamar a função da lib que escreve o QR Code num arquivo
  //    (lembra: ela trabalha com Promise, então o que vem antes da chamada?)
  await QRCode.toFile(outputPath, text);
  // 2. o que essa função deveria devolver pra quem chamou ela?
  //    (pensa: quem usa essa função, no index.js, vai querer saber o quê depois?)
  return outputPath;
}