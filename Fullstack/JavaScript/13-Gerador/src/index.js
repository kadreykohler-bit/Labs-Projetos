import chalk from 'chalk';
import {intro,outro,select,text,isCancel, log} from '@clack/prompts';
import {generatePassword} from './password/password.js';
import {generateQRCode} from './qr-code/qr-code.js';

async function main() {
   intro('Gerador de senhas e QR Codes');
    
  
    const option = await select({
    message: 'O que você deseja gerar?',
    options: [
        { value: 'password', label: 'Senha' },
        { value: 'qrcode', label: 'QR Code' },
        { value: 'exit', label: 'Sair' }
    ]
});

if (isCancel(option) || option === 'exit') {
    outro(chalk.red('Operação cancelada!'));
    process.exit(0);
}

if (option === 'qrcode') {
    const resposta = await text({ message: 'Digite o texto para gerar o QR Code:' });
    const outputPath = await text({ message: 'Digite o caminho do arquivo para salvar o QR Code:' });
    await generateQRCode(resposta, outputPath);
    log.success(chalk.green(`QR Code gerado com sucesso! Salvo em: ${outputPath}`));
}

if (option === 'password') {
    const resposta = await text({ message: 'Digite o numero de caracteres para gerar a senha:' });
    const password = generatePassword(parseInt(resposta));
   log.success(chalk.green(`Senha gerada com sucesso! Sua senha é: ${password}`));

  
}
outro (chalk.green('Obrigado por usar o gerador de senhas e QR Codes!'));
} main();
