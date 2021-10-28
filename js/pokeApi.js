function getPokemons(url = "https://pokeapi.co/api/v2/pokemon/"){
     let httpRequest = new XMLHttpRequest();
     httpRequest.onreadystatechange = function() {
         if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
                 console.log(httpRequest.responseText)
             let ul = document.getElementById("pokelist");
             var response = JSON.parse(httpRequest.responseText);  //Désérialize la réponse
                 for(let pokemon of response.results) {
                     ul.innerHTML += `<li>${pokemon.name}</li>`
                 }
             }
             else {
          
             }
         }
     }
     httpRequest.open("GET", url);
     httpRequest.send();


  fetch(url).then(function(response) {
        if(response.ok) {
            response.json().then(function(response){
                let ul = document.getElementById("pokelist");
                for(let pokemon of response.results) {
                    ul.innerHTML += `<li>${pokemon.name}</li>`
                }
            });
        }
        else {
            let ul = document.getElementById("pokelist");
            ul.innerText = response.status;
        }
    }).catch(function(error) {
        let ul = document.getElementById("pokelist");
        ul.innerText = error.message;
    })
}
