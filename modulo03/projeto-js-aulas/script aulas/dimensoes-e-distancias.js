/*
 const listaAnimais = document.querySelector('.animais-lista')

const heigth = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft
console.log(h2left)


const h2rect = primeiroh2.getBoundingClientRect()
console.log(h2rect)
if(h2rect.top < 0){
    console.log('passou do elemento')
}

console.log(
    window.innerWidth,
    window.outerWidth,
    window.outerHeight,
    window.outerWidth,
    window.pageYOffset,
)

//matchMedia() é igual meduaQuery

const small = window.matchMedia('(max-width: 600px)').matches

if(small){
    console.log('Usuário mobile')
}else{
  console.log('Usuario Desktop') 
} 
*/

//Exercício

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img')
const disImgTop = primeiraImg.offsetTop
console.log(disImgTop)

// Retorne a soma da largura de todas as imagens

function somaImagens(){
    const imagens = document.querySelectorAll('img')
    let soma = 0
    imagens.forEach((imagem) =>{
        soma += imagem.offsetWidth
    })
    console.log(soma)
}

window.onload = function(){
    somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link)=> {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'Possui boa acessibilidade')
    }else{
        console.log(link, 'Não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches

if(small){
    console.log('Usuário mobile')
}else{
  console.log('Usuario Desktop') 
} 