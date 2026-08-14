export function generatePassword(length) {
  // 1. você precisa de uma "fonte" de caracteres possíveis (uma string ou array)
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  if (length <= 0) {
      length = 12; // Definindo um comprimento padrão de 12 se o valor fornecido for menor ou igual a 0;
    }  
  if (length > 100) {
    length = 100; // Limitando o comprimento máximo a 100 caracteres
  }

  // 2. você precisa de algum tipo de repetição (loop) que rode `length` vezes
  for (let i = 0; i < length; i++) { 
    
    // 3. em cada repetição, escolher um caractere aleatório da fonte e ir acumulando
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // 4. retornar o resultado final
  return password;
}