let a = 7;
let b = 94;

console.log("a = " + a + " b = " + b);

let aux = a;
a = b;
b = aux;
console.log("\nDepois da troca:\n" + "a = " + a + " b = " + b);

[a, b] = [b, a];
console.log("\nTroca diferente:\n" + "a = " + a + " b = " + b);

if(b == 94 && a == 7)
    console.log("\nAcabou!");