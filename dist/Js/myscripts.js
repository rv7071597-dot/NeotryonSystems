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
const musica = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("btnMusica");

musica.volume = 0.25; // volumen suave

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = "⏸"; // cambia a pausa
  } else {
    musica.pause();
    btnMusica.textContent = "🎵"; // vuelve a icono música
  }
});
