let tabuleiroH = document.querySelectorAll('.casa')

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

  tabuleiroH.forEach((casadiv, casaindice) => {
    casadiv.addEventListener('click', () => {
      let jogadorDaVez = (estados.turno ? eu : cpu).sinalJogador
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
})()

const eu = Jogador('X')
const cpu = Jogador('O')
