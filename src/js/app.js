
$(document).ready(function () {
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function navegacionFija(){
    const sobreFestival = document.querySelector('.sobre-festival')

    $(window).on('scroll', function () {

        if(sobreFestival.getBoundingClientRect().top < 0){
            $('.header').addClass('fijo');
            $('body').addClass('body-scroll');
        }else{
            $('.header').removeClass('fijo');
            $('body').removeClass('body-scroll');
        }
    });
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.contenido-header a');

    enlaces.forEach(enlace =>{
        $(enlace).on('click', function (e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });
    })
}

function crearGaleria(){

    for(let i = 1; i<=12; i++){
        $('.galeria-imagenes').append(`
            <picture id="${i}"> 
                <source srcset="build/img/thumb/${i}.avif" type="image/avif">
                <source srcset="build/img/thumb/${i}.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen galeria">
            </picture>
        `);

        $(`#${i}`).on('click', function () {
            mostrarImagen(`${i}`)
        });
    }
}

function mostrarImagen(id){
    $('body').addClass('fijar-body');
    $('body').append(`
        <div class="overlay">
            <picture id="${id}"> 
                <source srcset="build/img/grande/${id}.avif" type="image/avif">
                <source srcset="build/img/grande/${id}.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen galeria">
            </picture>
            <p class="btn-cerrar">X</p>
        </div>
    `);

    $('.btn-cerrar').on('click', function () {
        $('.overlay').remove();
        $('body').removeClass('fijar-body');
    });

    $('.overlay').on('click', function () {
        $('.overlay').remove();
        $('body').removeClass('fijar-body');
    });
}


