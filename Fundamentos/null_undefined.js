let valor // não foi inicializada
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor) // null
// console.log(valor.toString())

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 5.50
console.log(produto)

produto.preco = undefined // não setar variáveis para undefined
console.log(produto.preco)

delete produto.preco // objeto volta a ser vazio / tirar atributo de um objeto
console.log(produto.preco)

produto.preco = null // ex: produto sem preço
console.log(produto.preco)