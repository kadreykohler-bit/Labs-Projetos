class Personagem {
  constructor(nome, vel, man, pod) {
    this.NOME = nome;
    this.VELOCIDADE = vel;
    this.MANOBRABILIDADE = man;
    this.PODER = pod;
    this.PONTOS = 0;
  }

rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
    }
}

const player1 = new Personagem("Mario", 4, 3, 3);
const player2 = new Personagem("Peach", 3, 4, 2);
const player3 = new Personagem("Yoshi", 2, 4, 3);
const player4 = new Personagem("Browser", 5, 2, 5);
const player5 = new Personagem("Luigi", 3, 4, 4);
const player6 = new Personagem("Kong", 2, 2, 5);

function sortearBloco() {
    let aleatorio = Math.random(); 
    let resultado;

    if (aleatorio <= 0.33) {
        resultado = "RETA";
    } else if (aleatorio <= 0.66) {
        resultado = "CURVA";
    } else {
        resultado = "CONFRONTO";
    }

    return resultado;
}

const competidores = [player1, player2, player3, player4, player5, player6];

function prepararDuelo(lista) {
    let p1 = lista[Math.floor(Math.random() * lista.length)];
    let p2 = lista[Math.floor(Math.random() * lista.length)];

    while (p1 === p2) {
        p2 = lista[Math.floor(Math.random() * lista.length)];
    }

    return [p1, p2];
}

async function iniciarCorrida() {
    const [p1, p2] = prepararDuelo(competidores);
    console.log(`🏎️ LARGADA: ${p1.NOME} vs ${p2.NOME}\n`);

    for (let rodada = 1; rodada <= 5; rodada++) {
        console.log(`--- Rodada ${rodada} ---`);

        let bloco = sortearBloco(); 
        console.log(`Pista: ${bloco}`);

        let dado1 = p1.rolarDado();
        let dado2 = p2.rolarDado();

        // --- INÍCIO DA LÓGICA DE DISPUTA ---
        if (bloco === "CONFRONTO") {
            let resultado1 = dado1 + p1.PODER;
            let resultado2 = dado2 + p2.PODER;
            console.log(`🥊 Confronto: ${p1.NOME} (${resultado1}) vs ${p2.NOME} (${resultado2})`);

            if (resultado1 > resultado2) {
                if (p2.PONTOS > 0) p2.PONTOS--;
                console.log(`${p2.NOME} perdeu 1 ponto!`);
            } else if (resultado2 > resultado1) {
                if (p1.PONTOS > 0) p1.PONTOS--;
                console.log(`${p1.NOME} perdeu 1 ponto!`);
            }
        } 
        
        else if (bloco === "RETA") {
            let total1 = dado1 + p1.VELOCIDADE;
            let total2 = dado2 + p2.VELOCIDADE;
            console.log(`🛣️ Reta: ${p1.NOME} (${total1}) vs ${p2.NOME} (${total2})`);

            if (total1 > total2) {
                p1.PONTOS++;
                console.log(`${p1.NOME} ganhou 1 ponto!`);
            } else if (total2 > total1) {
                p2.PONTOS++;
                console.log(`${p2.NOME} ganhou 1 ponto!`);
            }
        }

        else if (bloco === "CURVA") {
            let total1 = dado1 + p1.MANOBRABILIDADE;
            let total2 = dado2 + p2.MANOBRABILIDADE;
            console.log(`🧭 Curva: ${p1.NOME} (${total1}) vs ${p2.NOME} (${total2})`)
            if (total1 > total2) {
                p1.PONTOS++;
                console.log
                (`${p1.NOME} ganhou 1 ponto!`);
            } else if (total2 > total1) {
                p2.PONTOS++;
                console.log(`${p2.NOME} ganhou 1 ponto!`);
            }else {
                console.log("Empate! Ninguém ganha ponto.");
                await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } 
  }
  console.log("\n--- RESULTADO FINAL ---");
    console.log(`${p1.NOME}: ${p1.PONTOS} pontos`);
    console.log(`${p2.NOME}: ${p2.PONTOS} pontos`);

    if (p1.PONTOS > p2.PONTOS) {
        console.log(`\n🏆 ${p1.NOME} VENCEU A CORRIDA! 🏁`);
    } else if (p2.PONTOS > p1.PONTOS) {
        console.log(`\n🏆 ${p2.NOME} VENCEU A CORRIDA! 🏁`);
    } else {
        console.log("\n🤝 A CORRIDA TERMINOU EM EMPATE!");
    }
}

iniciarCorrida();
