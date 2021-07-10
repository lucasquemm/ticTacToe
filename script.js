let jogo = document.querySelector('.jogo')
let tabuleiroH = document.querySelectorAll('.casa')
let jogadaTxt = document.querySelectorAll('.jogadaTxt')

const recebeJogada = (() => {
  let casa1 = document.querySelector('#casa1')
  let casa2 = document.querySelector('#casa2')
  let casa3 = document.querySelector('#casa3')
  let casa4 = document.querySelector('#casa4')
  let casa5 = document.querySelector('#casa5')
  let casa6 = document.querySelector('#casa6')
  let casa7 = document.querySelector('#casa7')
  let casa8 = document.querySelector('#casa8')
  let casa9 = document.querySelector('#casa9')
  //p
  let jogadaCasa1 = document.querySelector('#jogadaCasa1')
  let jogadaCasa2 = document.querySelector('#jogadaCasa2')
  let jogadaCasa3 = document.querySelector('#jogadaCasa3')
  let jogadaCasa4 = document.querySelector('#jogadaCasa4')
  let jogadaCasa5 = document.querySelector('#jogadaCasa5')
  let jogadaCasa6 = document.querySelector('#jogadaCasa6')
  let jogadaCasa7 = document.querySelector('#jogadaCasa7')
  let jogadaCasa8 = document.querySelector('#jogadaCasa8')
  let jogadaCasa9 = document.querySelector('#jogadaCasa9')
})()

const Jogador = (sinal) => {
  const sinalJogador = sinal
}

const Tabuleiro = (() => {
  k.addEventListener('click', function () {
    k.textContent = eu.sinal
  })
})()

const eu = Jogador('X')
// const criaDom = (tag, className, idName) => {
//   const elemento = document.createElement(tag)
//   elemento.classList.add(className)
//   elemento.id(idName)
//   jogo.appendChild(elemento)
// }

// const Tabuleiro = () => {
//   const board = []

//   const geraTabuleiro = (function () {
//     criaDom('botao', 'casa', 'casa1'),
//       criaDom('botao', 'casa', 'casa2'),
//       criaDom('botao', 'casa', 'casa3'),
//       criaDom('botao', 'casa', 'casa4'),
//       criaDom('botao', 'casa', 'casa5'),
//       criaDom('botao', 'casa', 'casa6'),
//       criaDom('botao', 'casa', 'casa7'),
//       criaDom('botao', 'casa', 'casa8'),
//       criaDom('botao', 'casa', 'casa9')
//   })()
// }
