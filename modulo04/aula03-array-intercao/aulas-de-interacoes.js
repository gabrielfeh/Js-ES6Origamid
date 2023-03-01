// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) =>{
//   console.log(item.toUpperCase(), index, array);
// })

// const li = document.querySelectorAll('li')

// li.forEach(i => i.classList.add('ativa'))


//-------------------- MAP)() COM OBJETOS --------------------


// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.map((item, index, array) =>{
//   console.log(item)
// })

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2)

// console.log(numerosX2)


//-------------------- MAP() COM OBJETOS --------------------


// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min)

// const nomeAulas = aula => aula.nome;;

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(tempoAulas)
// console.log(arrayNomeAulas)


//-------------------- REDUCE () --------------------


// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item)=>{
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0)

// console.log(reduceAulas)


/*   ----------- teste de reduce()
const valores = [150, 350, 45, 500];

const totalValores = valores.reduce((acu, vAtual) =>{
  return acu + vAtual;
}, 0)

console.log(totalValores)
*/


//---------------- RETORNANDO VALOR MAIOR DE UMA ARRAY ---------------

// const numeros = [10, 35, 2, 55, 80, 15, 65, 23];

// const valorMaior = numeros.reduce((anterior, atual) =>{
//   if(anterior > atual)
//     return anterior
//   else
//     return atual
// })
// //Ou podemos usar um ternário

// const maiorValor = numeros.reduce((anterior, atual)=>{
//   return anterior > atual ? anterior : atual;
// })
// console.log(valorMaior)
// console.log(maiorValor)



// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const listaAulas = aulas.reduce((acu, itemDoObjeto, index)=>{
//   acu[index] = itemDoObjeto.nome;
//   return acu;
// }, {});

// console.log(listaAulas)

const frutas = ['Banana', 'Pêra', 'Uva']

const temUva = frutas.some((item) =>{
  return item === 'Uva'
})

console.log(temUva)

const numeros = [6, 43, 22, 88, 101, 29]

const maiorQue10 = numeros.every(n => n > 10)

console.log(maiorQue10)


//-------------- index() e findindex() --------------

const findUva = frutas.find((fruta)=>{
  return fruta === 'Uva'
})


const indexUva = frutas.findIndex((fruta)=>{
  return fruta === 'Uva'
})


console.log(findUva)
console.log(indexUva)


//-------------- filter() --------------

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  return item //retorna somente valores truthy
})

console.log(arrayFrutas)

const numeros1 = [6, 10, 15, 43, 22, 88, 101, 29]

const maiorQue20 = numeros1.filter((valor) =>{
  return valor > 20
})

console.log(maiorQue20)


// filter em objetos

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulaMaior15 = aulas.filter((aula) =>{
  return aula.min > 15
})

console.log(aulaMaior15)