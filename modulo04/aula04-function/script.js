// const perimetro = new Function('lado', 'return lado * 4')//Nunca vai usar desta forma

// function somar(n1, n2){
//   return n1 + n2
// }

// console.log(somar.length)

// function darOi(nome, idade){
//   console.log('Oi para você ' + nome + idade)
// }

// darOi.call({},'Gabriel ', 25)

// function descricaoCarro(){
//   console.log(this.marca + ' ' + this.ano)
// }

// descricaoCarro.call({marca:'Honda', ano: 2019})

// const carros = ['Ford', 'Fiat', 'VW']
// const frutas = ['Banana', 'Uva', 'Pêra']

// carros.forEach.call(carros, (item) => {
//   console.log(item)
// })

//------------- Exemplo -------------

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}
Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe)
}


const ul = new Dom('ul')

console.log(ul)