const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObj = e => JSON.parse(e);
const precos = e => e.preco;

let resultado = carrinho.map(paraObj).map(precos);
console.log(resultado);