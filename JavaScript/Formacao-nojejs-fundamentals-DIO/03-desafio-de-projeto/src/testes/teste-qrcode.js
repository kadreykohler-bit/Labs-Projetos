import  {generateQRCode}  from '../qr-code/qr-code.js';

async function main() {             
  try {
    const outputPath = await generateQRCode('https://www.example.com', 'qrcode.png');
    console.log(`QR Code gerado com sucesso em: ${outputPath}`);
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
  } 
}

main();