import {verificarVoto,
        votar,
        recuperarVotaciones,
        iniciarSesionGoogle,
    } from "./Firebase-connect.js";

let dialogIniciarSesion = document.getElementById('dialogIniciarSesion');
let idUsuario = " ";
let votacionLocal = {}

//Esto se va a ejecutar cada vez que se abra el documento
document.addEventListener('DOMContentLoaded', function(){
    dialogIniciarSesion.showModal();
})

document.getElementById("btnIniciarSesion").onclick = async function(event){
    event.preventDefault();
    let usuario = await iniciarSesionGoogle();
    if (usuario.email){
        sessionStorage.setItem("usuario", usuario.email);
        dialogIniciarSesion.close();
    }
}

document.getElementById("btnIniciarSesion").onclick = async function(event){
    event.preventDefault();
    const resultado = await iniciarSesionGoogle();
    if (resultado.email){
        alert("no se a podido iniciar sesion");
        return
    }
    sessionStorage.setItem("usuario", resultado.email);
    idUsuario = resultado.uid;
    dialogIniciarSesion.close();

    const serchParams = new URLSearchParams(window.location.search);
    const idVotacion = serchParams.ger("id");

    recuperarVotaciones(idVotacion, (votacion) => {
        if (votacion) {
            votacionLocal = votacion;
            votacionLocal.id = idVotacion;
            document.getElementById("nombre-votacion").textContent = votacion=nombre;
            document.getElementById("h2-opcion1").textContent = votacion.opcion1;
            document.getElementById("h2-opcion2").textContent = votacion.opcion2;

        }
    })

}