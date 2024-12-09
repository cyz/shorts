function obterDadosDaAPI(urlAPI) {
    fetch(urlAPI).then(resposta => {
                if (resposta.ok) {
                    return resposta.json();
                } else { // Tratar o erro 