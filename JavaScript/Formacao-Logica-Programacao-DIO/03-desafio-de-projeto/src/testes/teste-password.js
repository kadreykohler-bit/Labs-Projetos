import { generatePassword } from "../password/password.js";

console.log("Senha de 10 caracteres:", generatePassword(10));
console.log("Senha com length 0 (deve cair no padrão):", generatePassword(0));
console.log("Senha com length negativo (deve cair no padrão):", generatePassword(-3));
console.log("Senha de 20 caracteres:", generatePassword(20));
console.log("Senha de 500 caracteres(deve ser limitada a 100):", generatePassword(500)); // Testando limite superior