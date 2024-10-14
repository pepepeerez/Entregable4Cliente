class Alumno {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const alumnos = [
    new Alumno('Pepe', 'Pérez', 20),
    new Alumno('Javier', 'Ortega', 19),
    new Alumno('Jose Maria', 'Silva', 21),
    new Alumno('Javier', 'Polo', 19),
    new Alumno('Luna', 'López', 22),
    new Alumno('Lucía', 'Fernández', 20),
    new Alumno('Jorge', 'Gómez', 23),
    new Alumno('Laura', 'Ruiz', 21),
    new Alumno('Pedro', 'Sánchez', 22),
    new Alumno('Sara', 'Torres', 20),
    new Alumno('David', 'Ramírez', 24),
    new Alumno('Paula', 'Flores', 22),
    new Alumno('Antonio', 'González', 19),
    new Alumno('Carmen', 'Vargas', 20),
    new Alumno('Alberto', 'Castro', 21),
    new Alumno('Elena', 'Ortiz', 23),
    new Alumno('Miguel', 'Morales', 19),
    new Alumno('Sofía', 'Romero', 20),
    new Alumno('Ismael', 'Núñez', 21),
    new Alumno('Clara', 'Hernández', 22),
    new Alumno('Rafael', 'Gil', 23),
    new Alumno('Irene', 'Jiménez', 20)
];

const container = document.getElementById('container');
const generarBtn = document.getElementById('btn-generar');


const alumnosGenerados = new Set();

function generarAlumno() {
    if (alumnosGenerados.size >= alumnos.length) {
        alert('No se pueden generar más alumnos, todos ya han sido generados.');
        return;
    }

    let alumnoAleatorio;
    do {
        alumnoAleatorio = alumnos[Math.floor(Math.random() * alumnos.length)];
    } while (alumnosGenerados.has(alumnoAleatorio));

    alumnosGenerados.add(alumnoAleatorio);
    crearCarta(alumnoAleatorio);
}

function crearCarta(alumno) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <h3>${alumno.nombre} ${alumno.apellido}</h3>
        <p>Edad: ${alumno.edad}</p>
        <button class="btn-delete">Borrar</button>
    `;

    card.querySelector('.btn-delete').addEventListener('click', function() {
        container.removeChild(card);
        alumnosGenerados.delete(alumno);
    });

    container.appendChild(card);
}


generarBtn.addEventListener('click', generarAlumno);
