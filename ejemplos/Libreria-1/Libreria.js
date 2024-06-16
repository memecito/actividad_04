class Libreria {
  #libros;
  constructor(libros) {
    this.#libros = libros;
  }

  anadirLibro(libro) {
    this.#libros.push(libro)
  }

  getLibros() {
    return this.#libros
  }
}
