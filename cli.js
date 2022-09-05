import { pegaArquivo } from "./index.js";
import chalk from 'chalk';
import { validaURLs } from "./http-validacao.js";



const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === "validar"){
        console.log(chalk.yellow("Links Validados"), await validaURLs(resultado));
    }else{
    console.log(chalk.yellow("Lista de links"), resultado);
    }
}


console.log(processaTexto(caminho));