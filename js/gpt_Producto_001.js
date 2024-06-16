class Producto {
  constructor(sku, title, price, cantidad = 1) {
    this.sku = sku;
    this.title = title;
    this.price = price;
    this.cantidad = cantidad;
  }

  get sku() {
    return this._sku;
  }

  set sku(value) {
    this._sku = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }
}


class Carrito {
  constructor() {
    this.productos = [];
    this.total = 0;
  }

  añadirProducto(producto) {
    const existente = this.productos.find(p => p.sku === producto.sku);
    if (existente) {
      existente.cantidad += producto.cantidad;
    } else {
      this.productos.push(producto);
    }
    this.actualizarTotal();
  }

  actualizarUnidades(sku, unidades) {
    const producto = this.productos.find(p => p.sku === sku);
    if (producto) {
      producto.cantidad = unidades;
      this.actualizarTotal();
    }
  }

  obtenerInformacionProducto(sku) {
    const producto = this.productos.find(p => p.sku === sku);
    if (producto) {
      return {
        sku: producto.sku,
        title: producto.title,
        price: producto.price,
        cantidad: producto.cantidad
      };
    }
    return null;
  }

  obtenerCarrito() {
    return {
      total: this.total.toFixed(2),
      currency: "€",
      productos: this.productos.map(p => ({
        sku: p.sku,
        title: p.title,
        price: p.price,
        cantidad: p.cantidad
      }))
    };
  }

  actualizarTotal() {
    this.total = this.productos.reduce((acc, producto) => {
      return acc + producto.price * producto.cantidad;
    }, 0);
  }
}


const carrito = new Carrito();

const producto1 = new Producto("0K3QOSOV4V", "iFhone 13 Pro", 938.99, 2);
const producto2 = new Producto("1K2ZQOFR4X", "iFhone 14 Pro", 1099.99, 1);

carrito.añadirProducto(producto1);
carrito.añadirProducto(producto2);

console.log(carrito.obtenerCarrito());

carrito.actualizarUnidades("0K3QOSOV4V", 3);

console.log(carrito.obtenerInformacionProducto("0K3QOSOV4V"));
console.log(carrito.obtenerCarrito());
