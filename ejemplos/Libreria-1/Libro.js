// Debería saber Libro si su dueño lo ha leído?
// Debería saber un producto si está añadido al carrito?
class Libro {
  #titulo;
  #genero;
  #autor;
  #isbn;
  #peso;

  constructor(info) {
    this.#titulo = info.titulo;
    this.#genero = info.genero;
    this.#autor = info.autor;
    this.#isbn = info.isbn;
    this.#peso = info.peso;
  }

  getTitulo() {
    return this.#titulo;
  }

  getGenero() {
    return this.#genero;
  }

  getIsbn() {
    return this.#isbn;
  }

  getPeso() {
    return this.#peso;
  }

  getAutor() {
    return this.#autor;
  }
}
