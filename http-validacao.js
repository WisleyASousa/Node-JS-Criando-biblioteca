const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaStatus(arrayURLs) {
    //promises async await
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}



function geraArrayDeURLs(arrayLinks) {
    //loop para cada { chave: valor }
    return arrayLinks.map(ObjectLink => Object.values(ObjectLink).join());
}

export async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks); 
    const statusLinks = await checaStatus(links);
    return statusLinks;
}
