class Acordeon{
    constructor(el){
        this.el=el;
        console.log("El acordeon se ha construido")
    }
    init(){
        this.el.querySelector(".accodrion_button").addEventListner('click',()=>{
            this.el.classList.toggle("accordeon-open")
        })
        console.log("un acordeon se ha inicialidad")
    }
}