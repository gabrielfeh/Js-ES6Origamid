/* //forEach

const imgs = document.querySelectorAll('img')

let i = 0
imgs.forEach(function(item, index, array){
   // console.log(item, index, array)
}) 

//arrow function

const imgs = document.querySelectorAll('img')

imgs.forEach((item, index, array) => {
    console.log(item, index, array)
})

imgs.forEach (item =>{
    console.log("se não tiver mais de um paramentro não precisa fazer mais um (), somente o nome dele e '=>'")
})

imgs.forEach(()=>{
    console.log("Se for os paramentros estiver vazio ou com mais de um, é obrigatório o uso dos ().")
})

//quando só tem uma linha de código pode ser feito como abaixo:

let i = 0
imgs.forEach((item) => console.log(i++)) 
*/


//Exercício 02

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

paragrafos.forEach((item)=>{
    console.log(item)
})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item)=>{
    console.log(item.innerText)
})


// Como corrigir os erros abaixo:
 const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++)
});

imgs.forEach(() => i++); 






