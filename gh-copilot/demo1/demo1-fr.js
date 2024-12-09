function obtenirDonneesDepuisAPI(urlAPI) {
    fetch(urlAPI).then(reponse => {
                if (reponse.ok) {
                    return reponse.json();
                } else { // Gérer l'erreur 