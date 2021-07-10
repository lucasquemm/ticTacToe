let tabuleiroH = document.querySelectorAll('.casa')

const Jogador = (sinal) => {
  const sinalJogador = sinal

  return { sinalJogador }
}

const Tabuleiro = (() => {
  const fazJogada = (() => {
    let turno = true

    tabuleiroH.forEach((casadiv) =>
      casadiv.addEventListener('click', () => {
        turno
          ? ((casadiv.textContent = eu.sinalJogador), (turno = false))
          : ((casadiv.textContent = cpu.sinalJogador), (turno = true))
      })
    )
  })()
})()

const eu = Jogador('X')
const cpu = Jogador('O')
