function mostrarSeccion(id) 
{
      const secciones = document.querySelectorAll('.seccion');
      secciones.forEach(sec => sec.classList.remove('visible'));
      document.getElementById(id).classList.add('visible');
} 
 
/* ---------- CARRUSEL AUTOMÁTICO ---------- */

let slideIndex = 0;

function mostrarSlideAutomatico() {
  const slides = document.querySelectorAll('.carousel-item');

  slides.forEach(slide => slide.classList.remove('visible'));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add('visible');
}

/* Tiempo: cada 4 segundos (puedes cambiarlo) */
setInterval(mostrarSlideAutomatico, 4000);

// --- Control de música ---
const btnMusica = document.getElementById('btnMusica');
const musicaFondo = document.getElementById('musicaFondo');

btnMusica.addEventListener('click', () => {
  if (musicaFondo.paused) {
    musicaFondo.play();
    btnMusica.textContent = '🔊'; // cambia icono si quieres
  } else {
    musicaFondo.pause();
    btnMusica.textContent = '🎵';
  }
});
