// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) =>{
//   console.log(item.toUpperCase(), index, array);
// })

// const li = document.querySelectorAll('li')

// li.forEach(i => i.classList.add('ativa'))

const carros = ['Ford', 'Fiat', 'Honda'];

carros.map((item, index, array) =>{
  console.log(item)
})

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n => n * 2)

console.log(numerosX2)