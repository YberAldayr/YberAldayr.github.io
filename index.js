let shante = document.getElementById("shante");
let animacion = setInterval(cambiar_imagen, 50);
let num_imagen = 0;
let x = 0;
let y = 0;

function cambiar_imagen() {
    num_imagen = num_imagen + 1;
    let direc;
    if (num_imagen > 15) {
        num_imagen = 1;
    }
    direc = "img/shante/Shante_" + num_imagen + ".png";
    shante.setAttribute("src", direc);
}

document.addEventListener("keydown", mover);
function mover(event) {
    console.log(event.keyCode);

    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    const anchoPersonaje = shante.offsetWidth;
    const altoPersonaje = shante.offsetHeight;

    if (event.keyCode == 68) {
        console.log("Me moveré 5 pixeles a la derecha");
        x = x + 5;


        if (x + anchoPersonaje > anchoVentana) {
            x = anchoVentana - anchoPersonaje;
        }
        shante.style.left = x + "px";

    }

    if (event.keyCode == 65) {
        console.log("Me moveré 5 pixeles a la derecha");
        x = x - 5;


        if (x < 0) {
            x = 0;
        }
        shante.style.left = x + "px";
    }



    if (event.keyCode == 87) {
        console.log("Me moveré 5 pixeles hacia arriba");
        y = y - 5;

        if (y < 0) {
            y = 0;
        }

        shante.style.top = y + "px";

    }

    if (event.keyCode == 83) {
        console.log("Me moveré 5 pixeles hacia abajo");
        y = y + 5;

        if (y + altoPersonaje > altoVentana) {
            y = altoVentana - altoPersonaje;
        }

        shante.style.top = y + "px";
    }

}



