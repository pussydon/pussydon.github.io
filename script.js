'use strict'

let container = document.getElementById('container')
let btnLeft = document.getElementById('btnLeft')
let btnRight = document.getElementById('btnRight')
let num = 0

btnRight.addEventListener('click', function(){
    if(num < 3){
        container.classList.add('pos' + (num + 1))
        container.classList.remove('pos' + num)
        num += 1
    } else{
        container.classList.add('pos' + 1)
        container.classList.remove('pos' + num)
        num = 1
    }
})
btnLeft.addEventListener('click', function(){
    if(num >= 1){
        container.classList.add('pos' + (num - 1))
        container.classList.remove('pos' + num)
        num -= 1
    } else{
        container.classList.add('pos' + 2)
        container.classList.remove('pos' + num)
        num = 2
    }
})