setInterval(function(){
  let ville = "Lyon";
  let weather = document.querySelector('.weather');
  let selectville = document.querySelector('.ville');

  let ajax = new XMLHttpRequest;
  ajax.responseType = "json";

  ajax.addEventListener("readystatechange", function(){
      // si le readyState vaut 4 (ou XMLHttpRequest.DONE), c'est que la requete est terminée et la réponse est disponible
      if(ajax.readyState === ajax.DONE){
          // on fait ce qu'on veut faire avec notre reponse
          selectville.innerHTML = ville;
          weather.innerHTML = ajax.response.main.temp + 'C';
      }
  })
  // On prepare la requete ajax en indiquant la methode http et l'url de la ressource à requeter
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
  console.log(url);

  // on declenche la requete 
  ajax.open("GET", url);
  ajax.send();
},1000);