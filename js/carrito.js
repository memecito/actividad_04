class Carrito {
//   {
//     "SKU": "0K3QOSOV4V",
//     "title": "iFhone 13 Pro",
//     "price": "938.99"
//    }

/*
Creo que necesitamos un constructor vacio ya que debemos 
poder añadir productos
Debemos crear un metodo que sea añadir productos con cantidad
y otro que pueda modificara la cantidad
tal vez crear un objeto que sea producto donde viene el 
SKU, title, price y cantidad
*/
  #producto
  cant;//cantidad total de productos
  total;//total de dinero
  
    constructor(productos){
      this.#producto=productos;
      this.total=0;
    }
    añadirProducto(producto){
      const exists =this.#producto.find(p=>p.get_sku()===producto.get_sku());
      if(exists){
        exists.actualizarCantidad(exists.get_cantidad()+producto.get_cantidad)
      }else{
        this.#producto.push(producto)
      }
    }
    
    actualizarUnidades(sku, unidades) {
      // Actualiza el número de unidades que se quieren comprar de un producto
      const exists =this.#producto.find(p=>p.get_sku()===producto.get_sku());
      if (exists) {
        this.#producto.actualizarCantidad(unidades);
      }      
    }

    obtenerInformacionProducto(sku) {
      // Devuelve los datos de un producto además de las unidades seleccionadas
      // Por ejemplo
      // {
      //   "sku": "0K3QOSOV4V",
      //   "quantity": 3
      // } 
      const exists =this.#producto.find(p=>p.get_sku()===producto.get_sku());
    }

    obtenerCarrito() {
      // Devuelve información de los productos añadidos al carrito
      // Además del total calculado de todos los productos
      // Por ejemplo:
      // {
      //   "total": "5820",
      //   "currency: "€",
      //   "products" : [
      //     {
      //       "sku": "0K3QOSOV4V"
      //       ..
      //     }
      //    ]}
      // }
    }
  }


  class Producto{
    #sku;
    #title;
    price;
    cantidad;//  cantidad que hay en el almacen de este producto
    constructor(sku,title,price){
      this.#sku=sku;
      this.price=price;
      this.#title=title;
    }
    get_sku(){
      return this.#sku;
    }
    get_title(){
      return this.#title
    }
    get_cantidad(){
      return this.cantidad;
    }
    put_sku(sku){
      this.#sku=sku;
    }
    put_title(title){
      this.#title=title;
    }
    actualizarCantidad(cantidas){
      this.cantidad=cantidas;
      return true;
    }
    actualizarPrecio(precio){
      this.precio=precio;
      return true;
    }
  }



  /////

///// pruebas lo de abajo para borrar

  ////

  const prod= new Producto("asdf","IPhone 15",500);
  const otroprod= new Producto("qwer","Samsung10",100);
  let carro= new Carrito();
  otroprod.cantidad=5;
  prod.cantidad=9;
  
  console.log(prod);
  console.log(otroprod.get_sku());
  otroprod.put_sku("zxcv");
  console.log(otroprod.get_sku());
  carro.añadirProducto(prod);
  carro.añadirProducto(otroprod);
  console.log(carro);
  otroprod.cantidad=1;
  prod.cantidad=2;
  console.log(carro.product[1]);
  console.log(carro.actualizarUnidades("zxcv",7))
  

