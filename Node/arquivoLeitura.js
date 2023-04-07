const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// síncrona

// const conteudo = fs.readFileSync(caminho, 'utf-8');
// console.log(conteudo);

// assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

const config = require('./arquivo.json');
console.log(config.db.user);

// lendo os arquivos de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('\nConteúdo de pasta...');
    console.log(arquivos);
})