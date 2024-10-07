console.log("Hola mundo");

document.querySelector("input#lenguaje").value = navigator.language;

document.querySelector("a#open-offcanvas").addEventListener('click', ()=>{
    document.querySelector("aside#offcanvas").classList.add("show");
});

document.querySelector("button.close").addEventListener('click', ()=>{
    document.querySelector("aside#offcanvas").classList.remove("show");
});