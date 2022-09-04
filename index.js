
import chalk from 'chalk';
                //invocando a biblioteca instalada no projeto.
import fs from 'fs';


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultado.push({ [temp[1]]: temp[2] })
    }
    
    return arrayResultado;
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Erro encontrado'));
};


// // assync /  await / finally

export async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    try {
        const texto = await
        fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto));
    } catch(erro){
        trataErro(erro);
    }finally{
        console.log(chalk.yellow("Operação Concluída"));
    }
}






// // assync /  await

// async function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     try{
//         const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
//         console.log(chalk.green(texto));
//     }catch(erro){
//         trataErro(erro);
//     }
    
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = "utf-8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

// pegaArquivo("./arquivos/texto1.md");
