import chalk from 'chalk';
                //invocando a biblioteca instalada no projeto.
const fs = require('fs');



//métodos para colorir texto, cor de fundo e texto em negrito.
console.log(chalk.blue.bgWhite.bold("Alura"));

console.log(chalk.blue("Vamos Começar!"));

//recebendo multiplos argumentos
console.log(chalk.blue("Curso", "de", "NodeJS"));

//metodos aninhados
console.log(chalk.red("vermelho",
chalk.underline.bgBlue("azul")));

//uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

const paragrafo  = "texto retornado por uma funcao";

function texto(string){
    return string;
}

console.log(texto(paragrafo));
