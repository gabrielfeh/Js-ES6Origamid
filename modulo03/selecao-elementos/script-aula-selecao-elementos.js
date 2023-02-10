/* const animais = document.getElementById('animais')
console.log('animais')

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"')
console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[3])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

//console.log(gridSectionHTML[0])
//console.log(gridSectionNode[0])

gridSectionNode.forEach(function(item, index){
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item){
    console.log(item)
})
 */

//Exercício 01

// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img')
console.log(allImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgName = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgName)

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"')
console.log(linksInterno)

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisH2 = document.querySelector('.animais-descricao h2')
console.log(animaisH2)

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1])
