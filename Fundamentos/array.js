const valores = [7.6, 7.8, 9.8]
console.log(valores[0], valores[2])
valores[90] = 10
console.log(valores)

console.log(valores.length) // tamanho do array

valores.push(true, null, 'th') // inserindo valores no final do array
console.log(valores)

valores.pop() // apagando o último elemento do array
console.log(valores)

delete valores[0] // apagando um elemento do array
console.log(valores)

console.log(typeof valores)