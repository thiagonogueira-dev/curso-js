const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop(); // último elemento deletado
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona no inicio
console.log(pilotos); 

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // índice 1 entra, índice 4 não
console.log(algunsPilotos2);