/* //window.alert('Isso mesmo.')

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/modulo03/aula01/index.html'){
    console.log('É igual')
}

const h1selec = document.querySelector('h1')

h1selec.addEventListener('click', function(){
    console.log('Clicou em ', h1selec.innerText)
})

//ou

function callbackh1(){
    console.log('Clicou em ', h1selec.innerText)
}

h1selec.addEventListener('click', callbackh1) */

// Exercício 01

// Retorne o url da página atual utilizando o objeto window
const linkpage = window.location.href
console.log(linkpage)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const h1select = document.querySelector('.titulo')

// Retorne a linguagem do navegador
const languageNav = window.navigator.language
console.log(languageNav)

// Retorne a largura da janela 
const widthNav = window.innerWidth
console.log(widthNav)
