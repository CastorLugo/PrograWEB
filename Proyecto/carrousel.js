'use strict'

const grande  = document.querySelector('.grande')
const punto   = document.querySelectorAll('.punto')

// Cuando damos click en un punto sabremos la posicion del punto
// le aplicaremos un transform translateX 
// quitamos la clase activo a todos los puntos y la añadimos
// solo en los puntos a los que dmaos click

punto.forEach( (cadaPunto, i)=> {
    punto[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -50

        grande.style.transform = `translateX(${ operacion} %)`

        punto.forEach( (cadaPunto, i )=>{
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')
    })
})