var token = (new URLSearchParams(window.location.search)).get("token");
if(!token) {
    window.location.href = 'index.html';  //If no token is provided, redirect to login page
}

function cargarinfo(){
    if(token != "62aeaf3d28fd21c4498abdd7a9129bd3"){
        alert('El token es incorrecto, porfavor vuelva a iniciar sesion');
        window.location.href = 'index.html';
    }else{
        llenarTabla();
    }
}

function llenarTabla() {
    var tabla = document.getElementById("tablaDatos");
    tabla.innerHTML = ''; // Limpiar la tabla antes de llenarla

    for (var i = 0; i < 10; i++) {
        var id = i + 1;
        var datoAleatorio = Math.random().toString(36).substring(7); // Generar un dato aleatorio

        var fila = '<tr><td>' + id + '</td><td>' + datoAleatorio + '</td></tr>';
        tabla.innerHTML += fila; // Agregar fila a la tabla
    }
}
