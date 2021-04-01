
document.addEventListener( 'DOMContentLoaded', function () {
    object ={
    type   : 'loop',
    perPage: 4,
    focus  : 'center'}
    if(document.body.clientWidth <= 769){
        object.perPage = 2
    }
new Splide( '.splide' , 
    object).mount();

} );

function toggleMenu(){
    const menuToggle =document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    const bar =document.querySelector('.bar');
    bar.classList.toggle('active');
}

// document.addEventListener( 'DOMContentLoaded', function () {
//     if(document.body.clientWidth <= 769){
//     const splide = document.querySelector('.splide');
//     splide.pe
//     }
    
//    );
    