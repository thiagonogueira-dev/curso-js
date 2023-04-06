console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports);

function logThis (){
    console.log('\nDentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global); // dentro da função acessa o global


    this.perigo = '...';
}

const thisArrowFunc = () => {
    console.log('\nDentro da Arrow Function')
    console.log(this === global); // em arrow function não aponta para o global
    console.log(this === module.exports);
}

this.perigo = '...';

logThis();
thisArrowFunc();