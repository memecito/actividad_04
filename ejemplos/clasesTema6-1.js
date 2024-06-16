class Coche {
  #bastidor

  constructor(marca, bastidor, precio) {
    this.encendido = false
    this.velocidad = 0

    this.marca = marca
    this.precio = precio
    this.#bastidor = bastidor
  }

  arrancar() {
    this.encendido = true
  }
  
  parar() {
    this.encendido = false
  }
  
  acelerar() {
    this.velocidad = this.velocidad + 5
  }
  
  frenar() {
    if (this.velocidad > 5) {
      this.velocidad = this.velocidad - 5
    } else {
      this.velocidad = 0
    }
  }
  
  getBastidor() {
    return this.#bastidor
  }
}

class Descapotable extends Coche {
  constructor(marca, bastidor, precio) {
    super(marca, bastidor, precio)
    this.capota = false
  }
  
  encapotar() {
    this.capota = true
  }
  
  descapotar() {
    this.capota = false
  }
}

// const uncoche = new Coche("Renault", "ad7adsfkljhadfs", 20000)
// console.log(uncoche.marca)
// uncoche.arrancar()

// const otrocoche = new Descapotable("BMW", "kljhdsflka", 50000)
// otrocoche.arrancar()
// otrocoche.getBastidor()
// otrocoche.descapotar()

class Parking {
  constructor(nombre) {
    this.nombre = nombre
    this.coches = []
  }
  
  aparcar(coche) {
    this.coches.push(coche)
  }
  
  totalAsegurar() {
    let valortotal = 0;
    this.coches.forEach(coche => {
      valortotal = valortotal + coche.precio
    })
    return valortotal
  }
}

const uncoche = new Coche("Renault", "ad7adsfkljhadfs", 20000)
// const otrocoche = new Coche("Madza", "ad7adsfkljhadfs", 30000)
// const ultimocoche = new Coche("Mercedes", "ad7adsfkljhadfs", 70000)
// const undescapotable = new Descapotable("BMW", "kljhdsflka", 50000)
// const elparkingPepe = new Parking("Pepe")
// elparkingPepe.aparcar(uncoche)
// elparkingPepe.aparcar(otrocoche)
// elparkingPepe.aparcar(ultimocoche)
// elparkingPepe.aparcar(undescapotable)
// console.log(elparkingPepe.totalAsegurar())


class Libro {
  constructor({titulo, genero, autor, isbn, peso}) {
    this.titulo = titulo
    this.genero = genero
    this.autor = autor
    this.isbn = isbn
    this.peso = peso
  }
}

class Libreria {
  
  #libroLeyendo
  
  constructor() {
    this.libros = []
    this.#libroLeyendo = null //isbn
    this.librosLeidos = [] //array de isbns
  }
  
  pesoTotal() {
    let pesototal = 0;
    this.libros.forEach(libro => {
      pesototal = pesototal + libro.peso
    })
    return pesototal
  }
  
  librosSinLeer() {
    return this.libros.filter(libro => {
      return !this.librosLeidos.includes(libro.isbn)
    })
  }
  
  libroLeyendo() {
    return this.libros.find(libro => libro.isbn === this.#libroLeyendo)
  }
  
  anadirLibro(libro) {
    this.libros.push(libro)
  }
  
  empezarLibro(isbn) {
    this.#libroLeyendo = isbn
  }
  
  acabarLibro() {
    this.librosLeidos.push(this.#libroLeyendo)
    this.#libroLeyendo = null
  }
}

const libros = [
  {
    titulo: "Todas esas cosas que te diré mañana",
    genero: "Ficción",
    autor: "Elísabet Benavent",
    isbn: "978-84-9129-597-6",
    peso: 642,
  },
  {
    titulo: "El peligro de estar cuerda",
    genero: "Ensayos literarios",
    autor: "Rosa Montero",
    isbn: "978-84-322-4064-5",
    peso: 484,
  },
  {
    titulo: "Compas 7. Los Compas vs. hackers",
    genero: "Ficción",
    autor: "Mikecrack, El Trollino y Timba Vk",
    isbn: "978-84-270-5000-6",
    peso: 734,
  },
  {
    titulo: "Roma soy yo",
    genero: "Ficción",
    autor: "Santiago Posteguillo",
    isbn: "978-84-666-7178-1",
    peso: 1067,
  },
  {
    titulo: "El camino del fuego",
    genero: "Misterio",
    autor: "María Oruña",
    isbn: "978-84-233-6158-8",
    peso: 653,
  },
  {
    titulo: "Entre los muertos (Trilogía de Illumbe 3)",
    genero: "Misterio",
    autor: "Mikel Santiago",
    isbn: "978-84-666-7219-1",
    peso: 620,
  },
]

const libreria = new Libreria()

libros.forEach(librobj => {
  libreria.anadirLibro(new Libro(librobj))
})


// libreria.pesoTotal()
// libreria.empezarLibro("978-84-9129-597-6")
// libreria.acabarLibro()
// libreria.empezarLibro("978-84-666-7178-1")
// libreria.acabarLibro()
// libreria.librosSinLeer()







