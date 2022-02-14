let monnaie = document.querySelector('.money');

let ajax = new XMLHttpRequest;
ajax.responseType = "json";


setInterval(function(){
    ajax.addEventListener("readystatechange", function(){
        // si le readyState vaut 4 (ou XMLHttpRequest.DONE), c'est que la requete est terminée et la réponse est disponible
        if(ajax.readyState === ajax.DONE){
            // on fait ce qu'on veut faire avec notre reponse
            monnaie.innerHTML = ajax.response.EUR.last;
            console.log(ajax.response.EUR.last);
        }
    })
    // On prepare la requete ajax en indiquant la methode http et l'url de la ressource à requeter
    const url = "https://www.blockchain.com/ticker"
    ajax.open("GET", url);
    
    // on declenche la requete 
    ajax.send();
}, 10000);