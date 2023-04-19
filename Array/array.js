console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
//console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados)
//console.log(aprovados[0]);
//console.log(aprovados[1]);
//console.log(aprovados[2]);

aprovados[3] = 'Paulo';
aprovados.push('Thiago');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
//console.log(aprovados.length); // 10
//console.log(aprovados); // 4 itens iguais a undefined

aprovados.sort(); // causa alterações na ordem do array
//console.log(aprovados);

delete aprovados[1]; // seta a posição 1 para undefined
//console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1)
console.log(aprovados);