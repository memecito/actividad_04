//acceso a la api json de los productos
/*
var productos= new XMLHttpRequest();

function reqListener(){
    console.log(this.responseText);
}

productos.addEventListener("Load", reqListener);
productos.open("GET", "https://jsonblob.com/1249610857955844096");
productos.send();
console.log("Esto funciona");
console.log(productos.getAllResponseHeaders());
*/
let objeto = new Blob();
fetch('http://jsonblob.com/1249638667965554688').then(
    function(result){
        result.blob().then(
            function(producto){
               objeto= producto;
               console.log(objeto[0].title)
            }
        )
    }
);
function habilitar(id){
    const propiedad = document.getElementById(id)
    console.log(propiedad.disabled)
    if (propiedad.disabled===true) {
        propiedad.disabled = false;
    } else {
        propiedad.disabled = true;
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    let contador=0;
    let mas= document.querySelector("#mas");
    let menos= document.querySelector("#menos");
    let textcantidas= document.querySelector("#cantidad");
    textcantidas.value=contador;
        mas.addEventListener("click",(ev)=>{
            ev.preventDefault();//detiene el evento
            contador++;
           
            //llamamos a la funcion actualizarUnidaded, pasando el SKU y el contador          
            textcantidas.value=contador;
        });
    
        menos.addEventListener("click",(ev)=>{
            ev.preventDefault();//detiene el evento
            if(contador===0){
                alert("Este articulo esta a 0");
                if(contador<=0){
                    habilitar(menos)
                }
                //estaria bien que al llegar a cero se desabilite el boton de menos.
            }else{
                contador--;
            }
                
            //llamamos a la funcion actualizarUnidad, pasando el SKU y el contador
            
            textcantidas.value=contador;

        })
});
