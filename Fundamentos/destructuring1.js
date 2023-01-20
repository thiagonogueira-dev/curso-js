// novo recurso do ES2015

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {aa, bb = true} = pessoa
console.log(aa, bb)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)