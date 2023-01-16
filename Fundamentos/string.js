const escola = "Cod3r"

console.log(escola.charAt(4)) // caractere na posição 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // código do caracte na posição 3

console.log(escola.indexOf('C')) // index do caractere C na string

console.log(escola.substring(0, 3)) // imprimindo do caractere 0 ao 2

console.log('Escola: '.concat(escola)) // concatenando Strings

console.log(escola.replace('C', 'F')) // substituindo C por F

console.log('Ana,Maria,Pedro'.split(',')) // separando as palavras onde há uma vírgula em um array

console.log('Ana,Maria,Pedro'.split('').join('')) // join junta os caracteres de um array