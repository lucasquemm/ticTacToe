let tabuleiroH = document.querySelectorAll('.casa')
let cpuMode = document.querySelector('#modeCpu')
let playerMode = document.querySelector('#modePlayer')
let trocarSinal = document.querySelector('#trocaSinal')

const Tabuleiro = (() => {
  let estados

  const casasEmAberto = () => {
    let indices = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return indices.filter((indice) => !estados.casas[indice])
  }

  const resetaEstados = () => {
    estados = {
      turno: true,
      vitoria: false,
      fimDeJogo: false,
      casas: Array(9).fill(undefined),
    }
  }

  const getTurno = () => estados.turno

  const getCasas = () => estados.casas.filter((casa) => !casa)

  const obterMensagem = (vencedor) => {
    return estados.vitoria ? `${vencedor} ganhou!` : `empate`
  }

  const marcaCasa = (casaindice) => {
    let jogadorDaVez = estados.turno ? 'X' : 'O'
    let casa = estados.casas[casaindice]

    if (!casa && !estados.fimDeJogo) {
      estados.casas[casaindice] = jogadorDaVez
      estados.turno = !estados.turno

      return jogadorDaVez
    }

    return casa
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
        casas[a] === casas[b] &&
        casas[a] === casas[c] &&
        casas[a] != undefined
      ) {
        estados.vitoria = true
        estados.fimDeJogo = true
        return obterMensagem(casas[a])
      }
    }
    if (casas.every((cadaCasa) => cadaCasa != undefined)) {
      estados.vitoria = false
      estados.fimDeJogo = true
      return obterMensagem()
    }
  }
  resetaEstados()
  return {
    verificaVitoria,
    marcaCasa,
    resetaEstados,
    casasEmAberto,
    getTurno,
    getCasas,
    estados,
  }
})()

const Jogo = (() => {
  let trocaSinal = false
  let contraCpu = false

  const jogoIniciado = () => {
    let casasLivres = Tabuleiro.casasEmAberto()
    if (casasLivres.length < 9) {
      return true
    } else {
      return false
    }
  }

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

  playerMode.style.outline = '2px solid black'

  playerMode.addEventListener('click', () => {
    contraCpu = false
    resetJogo()

    playerMode.style.outline = '2px solid black'
    cpuMode.style.outline = '0px'
  })

  cpuMode.addEventListener('click', () => {
    contraCpu = true
    resetJogo()
    if (trocaSinal) {
      vsCpu()
    }

    cpuMode.style.outline = '2px solid black'
    playerMode.style.outline = '0px'
  })

  trocarSinal.addEventListener('click', () => {
    contraCpu = true
    trocaSinal = !trocaSinal

    if (jogoIniciado()) {
      resetJogo()
    } else {
      if (trocaSinal) {
        vsCpu()
      }
    }
    cpuMode.style.outline = '2px solid black'
    playerMode.style.outline = '0px'
  })

  tabuleiroH.forEach((casadiv, casaindice) => {
    casadiv.addEventListener('click', () => {
      casadiv.textContent = Tabuleiro.marcaCasa(casaindice)
      let resultado = Tabuleiro.verificaVitoria()
      if (resultado) {
        exibirMensagem(resultado)
      } else if (contraCpu && trocaSinal == Tabuleiro.getTurno()) {
        vsCpu()
      }
    })
  })

  const vsCpu = () => {
    let casasLivres = Tabuleiro.casasEmAberto()
    let escolhaDoCpu = casasLivres[randomizador(0, casasLivres.length)]

    if (casasLivres.length) {
      tabuleiroH[escolhaDoCpu].textContent = Tabuleiro.marcaCasa(escolhaDoCpu)
      if (Tabuleiro.verificaVitoria()) {
        exibirMensagem(Tabuleiro.verificaVitoria())
      }
    }
  }
})()

function randomizador(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
