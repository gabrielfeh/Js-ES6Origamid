/* for(let numero = 1; numero <= 10; numero ++){
    console.log(numero);
} 

//---------------------------------

var i = 1;
while (i<=10){
    console.log(i);
    i++
}

//---------------------------------

var videoGames = ['switch', 'PS5', 'xbox', '3DS']

for(var item = 0; item <4; item ++){
    console.log(videoGames[item]);
}

// Caso não saiba a quantidade total da lenght, só usar conforme abaixo:

for(var item = 0; item < videoGames.length ; item ++){
        console.log(videoGames[item]);
        if(videoGames[item] === 'PS5'){
        break;
    }
}

var frutas = ['Banana', 'Maça', 'Melância', 'Uva']

frutas.forEach(function(item, index){
    console.log(item, index)
})

//---------------------------------

var numero = 0;
var maximo = 50;
for(;numero < maximo;){
    console.log(numero);
    numero++;
}

 */

//---------------------------------


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var champs =[ 1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
champs.forEach(function(item){
    console.log(`O Brasil foi campão nos seguintes anos: ${champs} `)
})

for (var i = 0; i < champs.length; i++) {
    console.log(`o Brasil ganhou a copa de ${champs[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var cont = 0; cont < frutas.length; cont++){
    console.log(frutas[cont]);
    if(frutas[cont] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta)
