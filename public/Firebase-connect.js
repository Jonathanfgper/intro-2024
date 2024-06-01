// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, child, push, update, set, onValue }
    from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup }
    from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVd1m1B32Z0BO9YbtKIZxXq6zMqA7TNIU",
    authDomain: "proyecto-votacion-15dd4.firebaseapp.com",
    projectId: "proyecto-votacion-15dd4",
    storageBucket: "proyecto-votacion-15dd4.appspot.com",
    messagingSenderId: "1032651371097",
    appId: "1:1032651371097:web:8ce9214069404753ce7748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function iniciarSesionGoogle() {
    //Obtenemos la logica de autenticacion
    var auth = getAuth();
    //Creamos el proveedor en este caso es Google.
    var provider = new GoogleAuthProvider();
    auth.language = "es";
    var response = await signInWithPopup(auth, provider);
    console.log(response);
    const database = getDatabase();
    set(ref(database, 'usuarios/' + response.user.uid), {
    email: response.user.email,
    miniatura: response.user.photoURL
    });
    return response.user;
}

function GuardarVotacion(datos) {
    const database = getDatabase();
    const idVotacion = Math.floor(Math.random() * 1000000);
    set(ref(database, 'votaciones/' + idVotacion), {
    nombre: datos.nombre,
    opcion1: datos.opcion1,
    opcion2: datos.opcion2
    });
    return idVotacion;
}

function recuperarVotaciones(callback) {
    const database = getDatabase();
    return onValue(ref(database, '/votaciones/'), (snapshot) => {
    callback(snapshot.val())
    }, {
    onlyOnce: true
    });
}

function verificarVoto(idVotacion, uid, callback){
    const database = getDatabase();
    return onValue(ref(database, '/votos/' + idVotacion + "/" + uid), (snapshot) => {
    callback(snapshot.val());
    }, {
    onlyOnce: true
    });
}

function recuperarVotos(idVotacion, callback){
    const database = getDatabase();
    return onValue(ref(database, '/votos/' + idVotacion), (snapshot) => {
    callback(snapshot.val());
    });
}

async function votar(idVotacion, opcion, idUsuario, detalles){
    const database = getDatabase();
    set(ref(database, 'votos/' + idVotacion + "/" + opcion + "/" + idUsuario), detalles);
    set(ref(database, 'votos/' + idVotacion + "/"+ idUsuario), 1);

}

function recuperarVotacion(idVotacion, callback) {
    const database = getDatabase();
    return onValue(ref(database, '/votaciones/' + idVotacion), (snapshot) => {
    callback(snapshot.val())
    }, {
    onlyOnce: true
    });
}


export {
    iniciarSesionGoogle,
    GuardarVotacion,
    recuperarVotaciones,
    verificarVoto,
    recuperarVotos,
    votar,
    recuperarVotacion
}


