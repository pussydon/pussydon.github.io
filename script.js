'use strict'

        let count = Math.floor(Math.random() * (1000 - 500)) + 500
        for (let i = 1; i <= count; i++){
            let el = document.createElement('div')
            el.classList.add('button')
            document.body.appendChild(el)
        }