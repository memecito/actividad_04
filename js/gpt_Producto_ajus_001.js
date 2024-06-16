class Producto {
  constructor(sku, title, price, cantidad = 1) {
    this.sku = sku;
    this.title = title;
    this.price = price;
    this.cantidad = cantidad;
  }
  
  getSku() {
    return this.sku;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getCantidad() {
    return this.cantidad;
  }

  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }
}


class Carrito {
  constructor() {
    this.productos = [];
    this.total = 0;
  }

  añadirProducto(producto) {
    const existente = this.productos.find(p => p.getSku() === producto.getSku());
    if (existente) {
      existente.setCantidad(existente.getCantidad() + producto.getCantidad());
    } else {
      this.productos.push(producto);
    }
    this.actualizarTotal();
  }

  actualizarUnidades(sku, unidades) {
    const producto = this.productos.find(p => p.getSku() === sku);
    if (producto) {
      producto.setCantidad(unidades);
      this.actualizarTotal();
    }
  }

  obtenerInformacionProducto(sku) {
    const producto = this.productos.find(p => p.getSku() === sku);
    if (producto) {
      return {
        sku: producto.getSku(),
        title: producto.getTitle(),
        price: producto.getPrice(),
        cantidad: producto.getCantidad()
      };
    }
    return null;
  }

  obtenerCarrito() {
    return {
      total: this.total.toFixed(2),
      currency: "€",
      productos: this.productos.map(p => ({
        sku: p.getSku(),
        title: p.getTitle(),
        price: p.getPrice(),
        cantidad: p.getCantidad()
      }))
    };
  }

  actualizarTotal() {
    this.total = this.productos.reduce((acc, producto) => {
      return acc + producto.getPrice() * producto.getCantidad();
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
