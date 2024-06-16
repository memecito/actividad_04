document.addEventListener("DOMContentLoaded", () => {

  const syncLibreria = () => {
    const libros = libreria.getLibros();
    const listadoLibrosEl = document.querySelector(".libreria__listado");
    listadoLibrosEl.textContent = ""
    libros.forEach((libro) => {
      const li = document.createElement("li");
      li.textContent = libro.getTitulo();
      listadoLibrosEl.append(li);
    });
  };

  // Inicializar Libreria
  const instanciasLibros = listadoLibros.map((libro) => new Libro(libro));
  const libreria = new Libreria(instanciasLibros);
  syncLibreria()

  // Inicializo el formulario
  const formulario = document.querySelector(".libreria__form");
  formulario.addEventListener("submit", (ev) => {
    ev.preventDefault();
    // ToDo: mejorar con FormData
    const titulo = formulario.querySelector("#title").value;
    const genero = formulario.querySelector("#gender").value;
    const isbn = formulario.querySelector("#isbn").value;
    const peso = formulario.querySelector("#weight").value;
    const autor = formulario.querySelector("#author").value;
    const libro = new Libro({
      titulo: titulo,
      genero: genero,
      isbn: isbn,
      peso: peso,
      autor: autor,
    });
    libreria.anadirLibro(libro);
    syncLibreria()
  });
});
