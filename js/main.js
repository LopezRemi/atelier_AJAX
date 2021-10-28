
// // Instanciation de l'objet pour gérer les requêtes et les réponses
// let httpRequest = new XMLHttpRequest();

// // Code déclenché quand une réponse arrive du serveur
// httpRequest.onreadystatechange = function() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//             let p = document.getElementById("content");
//             p.innerText = httpRequest.responseText
//         } else {
//             console.log("Une erreur est survenue");
//         }
        
//     } else {
//         // pas encore prête
//         console.log("chargement en cours");
//     }
// };

// // Envoie de la requête au serveur
// httpRequest.open('GET', 'data/exemple.txt');
// httpRequest.send();

// Instanciation de l'objet pour gérer les requêtes et les réponses
let httpRequest = new XMLHttpRequest();

// Code déclenché quand une réponse arrive du serveur
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            document.getElementById("btn").addEventListener("click",(e)=>{
            let block = document.getElementById("spawn");
            var obj = JSON.parse(httpRequest.responseText);
            var value = Object.values(obj)
            block.innerText =  value[0] + " " + value[1];
            })} 
        else {
            console.log("Une erreur est survenue");
        }
        
    } else {
        // pas encore prête
        console.log("chargement en cours");
    }
};

// Envoie de la requête au serveur
httpRequest.open('GET', 'data/name.json');
httpRequest.send();


function getLuke(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log(httpRequest.responseText)
            let luke = document.getElementById("swlist");
            var response = JSON.parse(httpRequest.responseText);  //Désérialize la réponse
                for ( let value in response) {
                 luke.innerHTML += `<li>${value} : ${response[value]}</li>`;
                }
            }
                    else {
                
                    }
        }
    }
    httpRequest.open("GET", "https://swapi.dev/api/people/1/");
    httpRequest.send();
}


