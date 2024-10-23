console.log("Hola mundo");

document.querySelector("input#lenguaje").value = navigator.language;

document.querySelector("a#open-offcanvas").addEventListener('click', ()=>{
    document.querySelector("aside#offcanvas").classList.add("show");
});

const button_close = document.querySelector("button.close");
if(button_close){
    button_close.addEventListener('click', ()=>{
        document.querySelector("aside#offcanvas").classList.remove("show");
    });
}


document.querySelectorAll("#galeria .inner figure").forEach( (e)=>{
    e.addEventListener("click", (event)=>{
        const fig = e;
        const image = fig.querySelector("img").src;
        document.querySelector("dialog#lightbox img").src = image;
        document.querySelector("dialog#lightbox").showModal();
    })
} )