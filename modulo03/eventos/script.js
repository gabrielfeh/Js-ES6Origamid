const img = document.querySelector('img')
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


