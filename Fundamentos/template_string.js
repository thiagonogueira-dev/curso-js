const nome = 'Thiago'
const concatenacao = 'Olá ' + nome + '!'

const template = `Olá ${nome}!`

console.log(concatenacao)
console.log(template)

const up = texto => texto.toUpperCase() // função para deixar os caracteres em maiúsculo
console.log(up(template)) // chamando a função