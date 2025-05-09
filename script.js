// Espera a que el botón con id="menu-toggle" sea clicado
// y ejecuta la función para mostrar u ocultar el menú

document.getElementById("menu-toggle").addEventListener("click", function () {
    // Obtiene el elemento con id="menu"
    const menu = document.getElementById("menu");
  
    // Alterna la visibilidad del menú: si está visible, lo oculta; si está oculto, lo muestra
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
  