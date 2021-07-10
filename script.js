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

  const verificaVitoria = () => {}

  tabuleiroH.forEach((casadiv, casaindice) => {
    casadiv.addEventListener('click', () => {
      let jogadorDaVez = (estados.turno ? eu : cpu).sinalJogador
      let casa = estados.casas[casaindice]

      if (!casa.marcado) {
        casadiv.textContent = jogadorDaVez
        casa.marcado = !casa.marcado
        casa.sinal = jogadorDaVez
        estados.turno = !estados.turno
      }
    })
  })
})()

const eu = Jogador('X')
const cpu = Jogador('O')
