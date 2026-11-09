import * as cartService from "./cart.js";
import createItem from "./item.js";
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const myCart = [];

async function mostrarMenu() {
    console.log(`\n--- MENU SHOPEE ---\n1. Adicionar\n2. Ver Carrinho\n3. Total\n4. Remover\n5. Sair`);
    
    rl.question('Escolha: ', async (opcao) => {
        if (opcao === '1') {
            rl.question('Nome: ', (n) => rl.question('Preço: ', (p) => rl.question('Qtd: ', async (q) => {
                await cartService.addItem(myCart, createItem(n, parseFloat(p), parseInt(q)));
                mostrarMenu();
            })));
        } else if (opcao === '2') {
            await cartService.displayCart(myCart);
            mostrarMenu();
        } else if (opcao === '3') {
            const total = await cartService.calculateTotal(myCart);
            console.log(`Total: R$ ${total.toFixed(2)}`);
            mostrarMenu();
        } else if (opcao === '4') {
            rl.question('Índice para remover: ', async (i) => {
                await cartService.removeItem(myCart, parseInt(i));
                mostrarMenu();
            });
        } else {
            rl.close();
        }
    });
}

mostrarMenu();