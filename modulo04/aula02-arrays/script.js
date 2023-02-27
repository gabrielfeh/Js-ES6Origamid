// console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2,0,2))

// console.log(['item1', 'item2', 'item3', 'item4', 'item5'].fill('olá Mundo!',0,1))

// const transporte1 = ['Barco', 'Avião']
// const transporte2 = ['Carro', 'Moto']
// const transportes = transporte1.concat(transporte2)
// console.log(transportes)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min:10
//   },
//   {
//     nome:'HTML 3',
//     min: 20
//   },
//   {
//     nome:'CSS 1',
//     min: 25
//   },
// ]
// const tempoAulas = aulas.map(aula => aula.min)
// console.log(tempoAulas)
const aulas = [10, 25, 30]
const reduceAulas = aulas.reduce((acumulador, item, index, array) =>{
  console.log(acumulador, item, index, array); 
  return acumulador + item;
},100)