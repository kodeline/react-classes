//Clase 3

// Ejemplo 1 de fetch ----------------------
/*
const url ='https://dog.ceo/api/breeds/image/random'; 

fetch(url) //nos da una respuesta
  .then(function(respuesta) {
    return respuesta.json();  //convertimos la respuesta en JSON valido
  })
  .then(function(myJson) {
    document.getElementById('imagen').innerHTML = `<img src=${myJson.message}>`;
  });
*/

// Ejemplo 2 de Fetch() ---------------------------
/*
fetch('pokeapi')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
*/

