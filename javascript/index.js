// console.log('hello world')

const { read } = require('fs')

// // Declaration

// function lolProgramming(lol){

//     const lols = '😋'.repeat(lol)

//    return lols
// }


// const laugh = lolProgramming(6)
// console.log(laugh)



// const makeWine = (grapes) => {

// }


// const arr = [1,2,3,4]

// const square = arr.map(x => x **2)

// console.log(square)



// // Closures 
// function useCats () {
//     let name = 'baby kitty'

//     return [
//         () => `Meow ${name}`,
//         (newName) => name = newName 
//     ]
// }

// const [meow, setName] = useCats()

// console.log(meow())



// // Recursion

// const lifeLOL = () => {
    
// }


// console.log(process.platform)


// console.log(process.env.USER)


// const { EventEmitter } = require('events')
// const eventEmitter = new EventEmitter();


// eventEmitter.on('lunch', () =>{
//     console.log('yum!')
// })

// eventEmitter.emit('lunch')
// eventEmitter.emit('lunch')

 const { readFile, readFileSync } = require('fs')


// // const txt = readFileSync('./hello.txt', 'utf8')

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// })

// // console.log(txt)
// console.log("Do this asap!")


// const { readFile, readFileSync } = require('fs').promises

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8')
// }


// console.log(hello)


const express = require('express')

const app = express()

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
             if(err){
                response.status(500).send('sorry, out of order!')
             }

             response.send(html)
     })
})

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`) )