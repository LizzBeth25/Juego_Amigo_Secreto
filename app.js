const inputAmigo = document.getElementById ("amigo");
const ulListaAmigos = document.getElementById ("listaAmigos");
const resultado = document.getElementById ("resultado");
//donde se almacena
const listaAmigos = [];
//agregar amigos
function agregarAmigo () {
const nombre = inputAmigo.value.trim();
    //validar entrada
    if (nombre ===""){
        alert("Debes ingresar un nombre"); return;
    }
    //valiar que no este repetido
    if(listaAmigos.includes(nombre)){
        alert("Este nombre ya fue agregado"); return;
    }
    //agregar al array
    listaAmigos.push(nombre);
    //actualizar la lista de la pantalla
    mostrarLista();
    //limpiar input
    inputAmigo.value = "";
    }

//funcion mostra lista de amigos
function mostrarLista(){
    //limpiar lista
    ulListaAmigos.innerHTML = "";
    //recorrer array y crear <li> para cada nombre
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}
//funcion para sortear
function sortearAmigo(){
    if(listaAmigos.length ===0){
        alert("No hay amigos para sortear"); return;
    }
    const randomIndex = Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto = listaAmigos[randomIndex];

    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}
//const random = Math.floor(Math.random() * listaAmigos.length);
   // const amigoSecreto = listaAmigos[random];
    //ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
//console.log(Math,floor((Math.rando() *3 )))
//console.log(listaAmigos.length)