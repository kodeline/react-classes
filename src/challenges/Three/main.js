
// Mostrar los posts en el div
const showPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      // Creamos el div para ir agregando los posts
      let div = document.createElement("div");
      div.innerHTML = `
        <h1>${json.title}</h1>
        <p>${json.body}</p> `;
      document.getElementById("posts").appendChild(div);
    });
};

const sendData = () => {
  // Obtenemos data desde el form
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const contenido = document.getElementById("contenido").value;

  // preparamos un objecto para ser compatible con la api de jsonplaceholder
  let data = {
    id: 101,
    title: titulo,
    author: autor,
    body: contenido,
    userId: 11,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // view new post in console
    .then((response) => response.json())
    .then(
      (json) =>
        // Agregamos los post al div posts
        (document.getElementById("posts").innerHTML += `
        <h1>${json.title}</h1>
        <h2>${json.author}</h2>
        <p>${json.body}</p>
      `)
    );
};

// Agregamos el evento en el boton ver
document.getElementById("ver").addEventListener("click", showPosts);

// Agregamos el evento sendData al boton enviar posts
document.getElementById("enviar").addEventListener("click", sendData);
