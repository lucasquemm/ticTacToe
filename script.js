let tabuleiroH = document.querySelectorAll('.casa')
let cpuMode = document.querySelector('#modeCpu')
let playerMode = document.querySelector('#modePlayer')
let resultadodiv = document.querySelector('.resultado')

const Jogador = (sinal) => {
  const sinalJogador = sinal
  return { sinalJogador }
}

const Tabuleiro = (() => {
  let estadoInicial = {
    turno: true,
    vitoria: false,
    fimDeJogo: false,
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
  let estados = { ...estadoInicial }

  const resetaEstados = () => {
    estados = { ...estadoInicial }
  }

  const obterMensagem = (vencedor) => {
    return estados.vitoria ? `${vencedor} ganhou!` : `empate`
  }

  const marcaCasa = (casaindice) => {
    let jogadorDaVez = (estados.turno ? jogador1 : jogador2).sinalJogador
    let casa = estados.casas[casaindice]

    if (!casa.marcado) {
      casa.marcado = !casa.marcado
      casa.sinal = jogadorDaVez
      estados.turno = !estados.turno
    }
    return jogadorDaVez
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
        estados.vitoria = true
        estados.fimDeJogo = true
        return obterMensagem(casas[a].sinal)
      }
    }
    if (casas.every((cadaCasa) => cadaCasa.sinal != undefined)) {
      estados.vitoria = false
      estados.fimDeJogo = true
      return obterMensagem()
    }
  }

  return { verificaVitoria, marcaCasa, resetaEstados }
})()

const Jogo = (() => {
  const exibirMensagem = (mensagemdResultado) => {
    let textResultado = document.querySelector('.mensagemResultado')
    textResultado.textContent = mensagemdResultado
  }

  const resetJogo = () => {
    tabuleiroH.forEach((casadiv) => {
      casadiv.textContent = ''
    })
    exibirMensagem('')
    Tabuleiro.resetaEstados()
  }

  playerMode.addEventListener('click', () => {
    vsPlayer()
  })

  const vsPlayer = () => {
    tabuleiroH.forEach((casadiv, casaindice) => {
      casadiv.addEventListener('click', () => {
        casadiv.textContent = Tabuleiro.marcaCasa(casaindice)
        let resultado = Tabuleiro.verificaVitoria()
        if (resultado) {
          exibirMensagem(resultado)
        }
      })
    })
  }
})()

const jogador1 = Jogador('X')
const jogador2 = Jogador('O')
