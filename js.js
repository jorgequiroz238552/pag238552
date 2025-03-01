document.addEventListener('DOMContentLoaded', function() {
    const Messi = document.getElementById('10');
    const audio = document.getElementById('audio');
    Messi.addEventListener('click', function() {
        audio[audio.paused ? 'play' : 'pause']();
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const CR7 = document.getElementById('7');
    
    // Obtener el elemento de audio
    const audio = document.getElementById('audio2');
    

    CR7.addEventListener('click', function() {
        audio[audio.paused ? 'play' : 'pause']();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Definir las imágenes
    const images = [
        'imagenes/lionel-messi-299_480x480.png',  // Primera imagen
        'imagenes/messi1.png',                   // Segunda imagen
        'imagenes/messi2.png'                    // Tercera imagen
    ];
    
    const teamLogo = document.getElementById('team-logo');  // Obtener el logo donde se hace clic
    const messiImage = document.getElementById('messi-image');  // Obtener la imagen de Messi
    let currentImage = 0;  // Variable para llevar la cuenta de cuál es la imagen actual

    // Función para cambiar la imagen cada vez que se hace clic
    teamLogo.addEventListener('click', function() {
        currentImage = (currentImage + 1) % images.length;  // Cambia entre las imágenes (ciclo)
        messiImage.src = images[currentImage];  // Cambia la imagen de Messi
    });
});
//cr7
document.addEventListener('DOMContentLoaded', function() {
    // Definir las imágenes
    const images = [
        'imagenes/dhvoj9n-be43fb34-74d3-4f40-9531-d1df73d4e876.png',  // Primera imagen
        'imagenes/cristiano1.png',                   // Segunda imagen
        'imagenes/cristiano2.png'                    // Tercera imagen
    ];
    
    const equipo2 = document.getElementById('equipo2');  // Obtener el logo donde se hace clic
    const cristiano7 = document.getElementById('i1');  // Obtener la imagen de Messi
    let currentImage = 0;  // Variable para llevar la cuenta de cuál es la imagen actual

    // Función para cambiar la imagen cada vez que se hace clic
    equipo2.addEventListener('click', function() {
        currentImage = (currentImage + 1) % images.length;  // Cambia entre las imágenes (ciclo)
        cristiano7.src = images[currentImage];  // Cambia la imagen de Messi
    });
});



