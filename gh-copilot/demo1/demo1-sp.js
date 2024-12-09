function obtenerDatosDeAPI(urlAPI) {
    fetch(urlAPI).then(respuesta => {
                if (respuesta.ok) {
                    return respuesta.json();
                } else { // Manejar el error 