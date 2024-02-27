var fondomover=document.querySelector('.padre')
var humo=document.querySelector('.humo')
var luz=document.querySelector('.luz')
var llanta = document.querySelector('.llanta')
var llanta2 = document.querySelector('.llanta2')


fondomover.addEventListener('click',dad)

function dad(){
    fondomover.classList.add('fondoAnimado')
    humo.classList.remove('oculto')
    luz.classList.remove('oculto')
    llanta.classList.add('llantaAnimado')
    llanta2.classList.add('llantaAnimado')

}