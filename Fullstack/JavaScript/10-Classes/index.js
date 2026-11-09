// Definição da Classe
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para definir o tipo de ataque baseado no tipo do herói
  atacar() {
    let ataque;

    // Estrutura de decisão para definir a descrição do ataque
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque genérico";
    }

    // Saída final formatada
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias (objetos) para testar
const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Naruto", 17, "ninja");

// Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();