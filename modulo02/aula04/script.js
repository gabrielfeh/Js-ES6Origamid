var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao){
    console.log(`Verdadeiro`)
}else if(possuiDoutorado){
    console.log(`Possui doutorado`)
}else{
    console.log(`Falso`)
}

var corFavorita = "Verde";

switch(corFavorita){
    case "Azul":
        console.log('Olhe para o Céu.');
        break;
    case "Amarelo":
        console.log('Olhe para o Sol.');
        break;
    case "Verde":
        console.log('Olhe para a floresta.');
        break;
    default:
        console.log('Feche os olhos.')
}

/* Exercício 04*/

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 25;
var esposa = 21;

if (minhaIdade > esposa){
    console.log(`Minha idade é meior do que da minha esposa.`)
}else if(minhaIdade === esposa){
    console.log(`Nossa idade é igual.`)
    }else{
    console.log(`Minha idade é menor que da minha esposa.`)
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //treu
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log(`Brasil tem mais habitantes`)
}else{
    console.log(`China tem mais habitantes`)
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}//false

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}