'use strict'

        let count = Math.floor(Math.random() * (1000 - 500)) + 500
        let container = document.querySelector('.container')

        function random(min, max){
            return Math.floor(Math.random() * (max - min)) + min
        }

        for (let i = 1; i <= 1000; i++){
            let el = document.createElement('div')
            el.classList.add('button')
            let color = random(0, 4)
            if (color == 1) el.classList.add('anim1')
            if (color == 2) el.classList.add('anim2')
            if (color == 3) el.classList.add('anim3')
            document.body.appendChild(el)
        }