document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".accodion").forEach((accordionEl)=>{
        const unaccordeon = new accordionEl(accordionEl)
        unaccordeon.init();
    })
})