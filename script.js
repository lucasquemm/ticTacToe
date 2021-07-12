let tabuleiroH = document.querySelectorAll('.casa')
let cpuMode = document.querySelector('#modeCpu')
let playerMode = document.querySelector('#modePlayer')
let resultadodiv = document.querySelector('.resultado')

const Jogador = (sinal) => {
  const sinalJogador = sinal

  return { sinalJogador }
}

const Tabuleiro = (() => {
  let estados = {
    turno: true,
    vitoria: false,
    casas: [
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
      { marcado: false, sinal: undefined },
    ],
  }
  return { estados }
})()

const Jogo = (() => {
  let estados = Tabuleiro.estados

  const mensagem = (vencedor) => {
    let textResultado = document.createElement('p')
    textResultado.classList.add('mensagemResultado')
    if (estados.vitoria) {
      resultadodiv.appendChild(textResultado)
      textResultado.textContent = `${vencedor} ganhou!`
    } else {
      resultadodiv.appendChild(textResultado)
      textResultado.textContent = `empate`
    }
  }

  const verificaVitoria = () => {
    const listaVitorias = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //vertical
      [0, 4, 8],
      [2, 4, 6],
      //diagonal
    ]

    let { casas } = estados

    for (let [a, b, c] of listaVitorias) {
      if (
        casas[a].sinal === casas[b].sinal &&
        casas[a].sinal === casas[c].sinal &&
        casas[a].sinal != undefined
      ) {
        return [(estados.vitoria = true), mensagem(casas[a].sinal)]
      }
    }
    if (casas.every((cadaCasa) => cadaCasa.sinal != undefined)) {
      return [(estados.vitoria = false), mensagem()]
    }
  }

  playerMode.addEventListener('click', () => {
    vsPlayer()
  })

  const vsPlayer = () => {
    tabuleiroH.forEach((casadiv, casaindice) => {
      casadiv.addEventListener('click', () => {
        let jogadorDaVez = (estados.turno ? jogador1 : jogador2).sinalJogador
        let casa = estados.casas[casaindice]

        if (!casa.marcado) {
          casadiv.textContent = jogadorDaVez
          casa.marcado = !casa.marcado
          casa.sinal = jogadorDaVez
          estados.turno = !estados.turno
          verificaVitoria()
        }
      })
    })
  }
})()

const jogador1 = Jogador('X')
const jogador2 = Jogador('O')
