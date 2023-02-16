//sempre começar com letra Maiúscula para facilitar a identificação.

function Carro(marcaAtribuida, precoAtribuido, anoAtribuido){
    this.modelo = marcaAtribuida;
    this.preco = precoAtribuido;
    this.ano = anoAtribuido;
}

const Honda = new Carro('Civic', 25750, 2010)
const Fiat = new Carro('Uno', 14500, 2005)


function Carro2(modelo, precoCompra, anoCarro){
    const taxa =  1.2;
    const precoFinal = precoCompra * taxa;
    this.modelo = modelo;
    this.preco = precoFinal;
    this.ano = anoCarro;
}

const Ferrari = new Carro2('F40', 100000, 1997)