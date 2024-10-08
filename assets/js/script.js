// Cuenta regresiva

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

let endDate = '04/17/2028 00:00:00'; // Fecha de fin

let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // Cálculo de días, horas, minutos y segundos

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    // Si el tiempo ha terminado, mostrar "00:00:00"

    if (distance < 0) {
        clearInterval(x);
        days.innerHTML = "0<br><span>Dias</span>";
        hours.innerHTML = "00<br><span>Horas</span>";
        minutes.innerHTML = "00<br><span>Minutos</span>";
        seconds.innerHTML = "00<br><span>Segundos</span>";
        dd.style.strokeDashoffset = 440;  // Barra vacía para los días
        hh.style.strokeDashoffset = 440;  // Barra vacía para las horas
        mm.style.strokeDashoffset = 440;  // Barra vacía para los minutos
        ss.style.strokeDashoffset = 440;  // Barra vacía para los segundos
        day_dot.style.transform = `rotateZ(0deg)`; // Resetear los dots
        hr_dot.style.transform = `rotateZ(0deg)`;
        min_dot.style.transform = `rotateZ(0deg)`;
        sec_dot.style.transform = `rotateZ(0deg)`;
    } else {

        // Mostrar el tiempo restante en los elementos correspondientes

        days.innerHTML = d + "<br><span>Dias</span>";
        hours.innerHTML = h + "<br><span>Horas</span>";
        minutes.innerHTML = m + "<br><span>Minutos</span>";
        seconds.innerHTML = s + "<br><span>Segundos</span>";

        // Animar las líneas de la cuenta regresiva (barras circulares)

        dd.style.strokeDashoffset = 440 - (440 * d) / 365; // 365 días al año
        hh.style.strokeDashoffset = 440 - (440 * h) / 24; // 24 horas al día
        mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60 minutos por hora
        ss.style.strokeDashoffset = 440 - (440 * s) / 60; // 60 segundos por minuto

        // Animar los dots (puntos circulares)

        day_dot.style.transform = `rotateZ(${d * 0.986}deg)`; // 360° / 365 días = 0.986° por día
        hr_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360° / 24 horas = 15° por hora
        min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360° / 60 minutos = 6° por minuto
        sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360° / 60 segundos = 6° por segundo
    }
}, 1000); // Intervalo de 1 segundo





// Go Top

const goTopBtn = document.getElementById('goTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        goTopBtn.classList.add('show');
    } else {
        goTopBtn.classList.remove('show');
    }
});





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

    // console.log("Se ha creado un número binario en:", x, y); Para verificar si los números se están creando

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





// Efecto Scroll

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"], button').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            let targetId = anchor.getAttribute('href') || anchor.dataset.target;
            let targetElement = document.getElementById(targetId.substring(1));

            if (targetElement) {
                smoothScroll(targetElement, 1000); // 1000ms = 1 segundo
            }
        });
    });
});

// Función de scroll suave

function smoothScroll(target, duration) {
    let targetPosition = target.getBoundingClientRect().top + window.scrollY;
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}





// Blur Menu Nav

window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu'); // Asegúrate de que sea '.menu'
    const headerHeight = document.querySelector('#menu').offsetHeight;

    if (window.scrollY > headerHeight) {
        menu.classList.add('blur');
    } else {
        menu.classList.remove('blur');
    }
});