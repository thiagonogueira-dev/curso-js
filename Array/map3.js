Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i =0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObj = e => JSON.parse(e);
const precos = e => e.preco;

let resultado = carrinho.map2(paraObj).map2(precos);
console.log(resultado);