// fetch
const url = 'https://corporatebs-generator.sameerkumar.website/';
fetch(url)
    .then(resposta => resposta.json())
    .then(console.log)