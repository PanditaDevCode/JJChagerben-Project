// countdown 

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '04/17/2028 00:00:00';
// date format mm/dd/yy

let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    //time calculation for day, hours minutes and seconds

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    //output the result in element with id

    days.innerHTML = d + "<br><span>Dias</span>";
    hours.innerHTML = h + "<br><span>Horas</span>";
    minutes.innerHTML = m + "<br><span>Minutos</span>";
    seconds.innerHTML = s + "<br><span>Segundos</span>";

    //animate stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    // 365 days in the year
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 24 hrs in the day
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes in the hours
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 seconds in the seconds

    //animate circle dots
    day_dot.style.transform = 'rotateZ($(d * 0.986)deg)';
    // 360deg / 365dys = 0.986
    hr_dot.style.transform = 'rotateZ($(h * 15)deg)';
    // 360deg / 24hrs = 15
    min_dot.style.transform = 'rotateZ($(m * 6)deg)';
    // 360deg / 60 minutes = 6
    sec_dot.style.transform = 'rotateZ($(h * 6)deg)';
    // 360deg / 60seconds = 6

    //if the countdown is over, write some text

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
    }
})





// go top 

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }

}





// Efecto del Puntero

let lastMouseX = 0; // Última posición X del mouse
let lastMouseY = 0; // Última posición Y del mouse
const separation = 8; // Separación de los numeros por pixeles

// Función para crear un número binario (0 o 1)

function crearBinario(x, y) {
    const binario = document.createElement('div');

    // Asignar aleatoriamente un 0 o 1

    binario.textContent = Math.random() > 0.5 ? '1' : '0';
    binario.classList.add('binario');
    document.body.appendChild(binario);

    console.log("Se ha creado un número binario en:", x, y); // Para verificar si los números se están creando

    // Posición inicial del número binario

    binario.style.position = 'absolute';
    binario.style.left = `${x}px`;
    binario.style.top = `${y}px`;

    // Animación para desvanecer el número binario

    setTimeout(() => {
        binario.remove();
    }, 3000); // Eliminar el número después de 3 segundos
}

// Mover el ratón y crear números binarios en su camino

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    // Calcular la distancia entre la posición actual y la última donde se creó un número

    const distX = Math.abs(mouseX - lastMouseX);
    const distY = Math.abs(mouseY - lastMouseY);

    // Solo crear un número si el ratón se ha movido más de la separación deseada

    if (distX >= separation || distY >= separation) {
        crearBinario(mouseX, mouseY);
        lastMouseX = mouseX; // Actualizar la última posición X
        lastMouseY = mouseY; // Actualizar la última posición Y
    }
});

