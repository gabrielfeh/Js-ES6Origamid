/* const img = document.querySelector('img')
function callback(event){
    console.log(event)
}

img.addEventListener('click', callback)
//-----------------------------------------------------
const imagensLista = document.querySelector('.animais-lista')

function callbackLista(event){
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
    console.log(event.path)
}

imagensLista.addEventListener('click', callbackLista)
//-----------------------------------------------------

const linkExterno = document.querySelector('a[href^="http"]')
function handleLinkExerno(event){
    event.preventDefaut()
    console.log(event)
}

linkExterno.addEventListener('click', handleLinkExerno)

//-----------------------------------------------------

const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type, event)
    
}

h1.addEventListener('click', handleEvent)

//-----------------------------------------------------

window.addEventListener('scroll', handleEvent)

//-----------------------------------------------------



const imgs = document.querySelectorAll('img')

function handleImg(event){
    console.log(event.currentTarget)
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
});


 */

//Exercícios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInt = document.querySelectorAll('a[href^="#"')

function handleLink(event){
    event.preventDefault()
    linkInt.forEach((link)=>{
        link.classList.remove('ativo')
    })
    this.classList.add('ativo')
    console.log(event)
}

linkInt.forEach((link) =>{
    link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event){
    console.log(event.currentTarget.remove())

}

/* todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento)
})
 */

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event){
    console.log(event.key)
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleClickT)