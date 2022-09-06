const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


function manejaErros(erro) {
    throw new Error(erro.message);
}


async function checaStatus(arrayURLs) {
    //promises async await
    try{const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
    }))
    return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
    
}



function geraArrayDeURLs(arrayLinks) {
    //loop para cada { chave: valor }
    return arrayLinks
        .map(ObjectLink => Object
            .values(ObjectLink).join());
}

export async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks); 
    const statusLinks = await checaStatus(links);
    //spread operador(espalhamento)
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultados;
}
