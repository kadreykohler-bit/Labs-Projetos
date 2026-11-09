// services/cart.js

// 1. A função que estava faltando e causou o erro:
export async function addItem(userCart, item) {
    userCart.push(item);
}

// 2. A função de cálculo (que você já tinha):
export async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

// 3. A sua nova função de remover (com a lógica de quantidade):
export async function removeItem(userCart, index) {
    if (index < 0 || index >= userCart.length) {
        console.log("⚠️ Índice inválido!");
        return;
    }

    const item = userCart[index];

    if (item.quantity > 1) {
        item.quantity -= 1;
        console.log(`➖ Removida uma unidade de ${item.name}.`);
    } else {
        userCart.splice(index, 1);
        console.log(`🗑️ Item ${item.name} removido do carrinho.`);
    }
}

// 4. A função de exibir (que você já tinha):
export async function displayCart(userCart) {
    userCart.forEach((item, index) => {
        console.log(`${index}. ${item.name} - R$ ${item.price} | ${item.quantity}x`);
    });
}