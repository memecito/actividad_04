const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

function esCereza(fruta) {
  return fruta.nombre === "cerezas";
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }
