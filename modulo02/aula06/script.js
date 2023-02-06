var pessoa = {
    nome: 'Gabriel',
    idade: 25,
    profissão: 'Programador',
    possuiFacul: true,
}

console.log(pessoa.nome, pessoa.profissão, pessoa.idade)

//-------------------------

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}
console.log(quadrado.area(30))
console.log(quadrado.perimetro(30))

//-------------------------

console.log(Math.PI)
console.log(Math.random)
//-------------------------

var menu = {
    width: 800,
    heigth: 50,
    backgroundColor: '#84E',
}
menu.color='blue'
var bg = menu.backgroundColor;

//-------------------------


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var dados = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 25,
    casado: true,
}
console.log(dados.nome, dados.sobrenome, dados.idade, dados.casado)
dados.nomeCompleto = function(){
    return `Meu nome completo é ${dados.nome} ${dados.sobrenome}`
}



// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000

  console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
    raça:'labrador',
    cor:'preto',
    idade:10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'Latir'
        }else{
            return 'Nada'
        }
    }
  }