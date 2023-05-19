document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".contenedor-carousel .carousel");
    const flechaIzquierda = document.getElementById("flecha-izquierda");
    const flechaDerecha = document.getElementById("flecha-derecha");
  
    flechaDerecha.addEventListener("click", () => {
      carousel.scrollLeft += carousel.offsetWidth;
    });
  
    flechaIzquierda.addEventListener("click", () => {
      carousel.scrollLeft -= carousel.offsetWidth;
    });
  
    const indicadores = document.querySelector(".indicadores");
  
    Array.from(carousel.children).forEach((item, index) => {
      const boton = document.createElement("button");
      boton.addEventListener("click", () => {
        carousel.scrollLeft = index * carousel.offsetWidth;
      });
  
      indicadores.appendChild(boton);
    });
  
    const cambiarIndicador = () => {
      const index = Math.floor(
        carousel.scrollLeft / carousel.offsetWidth + 0.5
      );
      indicadores.children[index].classList.add("activo");
      Array.from(indicadores.children).forEach((item, ind) => {
        if (ind !== index) {
          item.classList.remove("activo");
        }
      });
    };
  
    carousel.addEventListener("scroll", cambiarIndicador);
  });
  