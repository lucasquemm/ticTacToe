let tabuleiroH = document.querySelectorAll('.casa')
let cpuMode = document.querySelector('#modeCpu')
let playerMode = document.querySelector('#modePlayer')

const Jogador = (sinal) => {
  const sinalJogador = sinal

  return { sinalJogador }
}

const Tabuleiro = (() => {
  let estados = {
    turno: true,
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

  const verificaVitoria = () => {
    const listaVitorias = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonal
      [0, 4, 8],
      [2, 4, 6],
    ]

    let { casas } = estados

    for (let [a, b, c] of listaVitorias) {
      if (
        casas[a].sinal === casas[b].sinal &&
        casas[a].sinal === casas[c].sinal &&
        casas[a].sinal != undefined
      ) {
        return alert(`${casas[a].sinal} ganhou!`)
      }
    }
    if (casas.every((cadaCasa) => cadaCasa.sinal != undefined)) {
      return alert('EMPATE')
    }
  }

  // const vsCpu = () => {
  //   function randomizador(min, max) {
  //     min = Math.ceil(min)
  //     max = Math.floor(max)
  //     return Math.floor(Math.random() * (max - min)) + min
  //   }
  //   return randomizador(0, 8)
  // }

  // cpuMode.addEventListener('click', () => {
  //   vsCpu()
  // })
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
