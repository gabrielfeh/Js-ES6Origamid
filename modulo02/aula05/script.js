/* function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(2));
//------------------------
function pi(){
    return 3.14;
}

var total = 5 * pi();

console.log(total)
// -----------------------
function imc (peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));
//------------------------
function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu.';
    }else if (cor === 'verde'){
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores.';
    }
}

console.log(corFavorita('azul'))
//-----------------------
//addEventListener('click', function(){console.log(`Oi`)});

//-----------------------

function imc2 (peso, altura){
    var imc2 = peso / (altura ** 2);
    console.log(imc2);
}

imc2(80, 1.8);

//----------------------

function terceiraIdade (idade){
    if(typeof idade !== 'number'){
        return 'Por favor preencha um número.'
    }
    else if(idade >= 60){
        console.log(`É idoso.`)
        return true;
    }else {
        console.log(`Não é idoso.`)
        return false;
    }
}

console.log(terceiraIdade(60))

//-----------------------

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países.`
}

console.log(totalPaises);

//----------------------- */

//exercício 05

// Crie uma função para verificar se um valor é Truthy
function isTrue(dados){
    return !!dados;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    return lado * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par
function isEven(numero){
    var modulo = numero % 2;
    if(modulo === 0){
        return true;
    }else{
        return false;
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
    return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function(){
    console.log('Gabriel Flipe');
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  