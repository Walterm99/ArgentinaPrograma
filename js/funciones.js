
const tablas=document.getElementsByClassName('tabla');
for(let i=0; i<tablas.length; i++){
    tablas[i].style.display="none";
}

document.getElementById('botonHide').addEventListener("click",()=>ocultardatos(mostrarBoton,botonHide,Lista))
document.getElementById('mostrarBoton').addEventListener("click",()=>mostrardatos(mostrarBoton,botonHide,Lista))
document.getElementById('mostrarBotonLab').addEventListener("click",()=>mostrardatos(mostrarBotonLab,buttonHideLab,tablaLab))
document.getElementById('buttonHideLab').addEventListener("click",()=>ocultardatos(mostrarBotonLab,buttonHideLab,tablaLab))


    
 function mostrardatos(show,hide,dato){
    
    show.style.display="none"
    hide.style.display="block"
    dato.style.display="flex"
 }


 function ocultardatos(show,hide,dato){
    
    show.style.display="block"
    hide.style.display="none"
    dato.style.display="none"
 }

