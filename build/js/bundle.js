
document.addEventListener('DOMContentLoaded', function(){
    lineupPivot();

    scrolNav();

    navegacionFija();

    //clickFestival();
});

// function clickFestival(){
//     const h1 = document.querySelector(".header h1");
//     h1.addEventListener('click', function (e){
//         console.log('._.xd');
//         const window = document.querySelector('window');
//         document.body.scrollTop;
//     });
    
// }

function lineupPivot(){
    const header = document.querySelector(".header");
    
    const pivot = document.createElement('P');
    pivot.setAttribute("id", "lineup-pivot");
    pivot.innerHTML = "<br><br>";
    //console.log(pivot);
    if(header.clientWidth >= 1200){
        const imagen = document.querySelector(".imagen");
        imagen.appendChild(pivot);
        //console.log('se agrego el pivot a imagen')
    }
    else if(header.clientWidth >= 760 & header.clientWidth < 1200){
        const texto = document.querySelector(".texto");
        texto.appendChild(pivot);
        //console.log('se agrego el pivot a texto')
    }
    else{
        const texto = document.querySelector(".texto");
        texto.appendChild(pivot);
    }
}

function navegacionFija(){

    const barra = document.querySelector('.header');
    //registrar el intersection observer
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
            //console.log(entries[0]);
        }else{
            barra.classList.add('fijo');
            //console.log(entries[0]);
        }

    })
    
    //elemento observado
    observer.observe(document.querySelector('.observerPoint'));
}

function scrolNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            //console.log(e.target.attributes.href.value);
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

//funcion para poner las imagenes en li's y que se muestren en index
function crearGaleria(){
    //seleccionamos la clase css del ul
    const galeria = document.querySelector('.galeria-imagenes');//selector de una clase

    //hacemos un for para insertar las imagenes en li's
    //importante que las imagenes se llamen igual que el contador
    for( let i =1; i<= 12; i++){
        //creamos los img de HTML
        const imagen = document.createElement('IMG');
        //le asignamos la imagen y un ID
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        //añadimos la funcion mostrarImagen
        imagen.onclick = mostrarImagen;

        //creamos el li
        const lista = document.createElement('LI');
        //le agregamos el elemento img
        lista.appendChild(imagen);
        //agregamos los li's al css del ul, los cacha automaticamente
        galeria.appendChild(lista);
    }

    function mostrarImagen(e){
        const id = parseInt(e.target.dataset.imagenId);
        //generamos la imagen
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/grande/${id}.webp`;
        //creamos el div donde se mostrara
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');

        //boton para cerrar imagen
        const cerrarImagen = document.createElement('P');
        cerrarImagen.textContent = 'X';
        cerrarImagen.classList.add('btn-cerrar')
        overlay.appendChild(cerrarImagen);

        //cuando se presiona el boton
        cerrarImagen.onclick = function(){
            overlay.remove();
            body.classList.remove('fijar-body');
        }
        //cuando se presione el overlay
        overlay.onclick = function(){
            overlay.remove();
            body.classList.remove('fijar-body');
        }
                
        //lo mostramos en el HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
    }
}
//# sourceMappingURL=bundle.js.map
