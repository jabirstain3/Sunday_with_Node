const { log } = require('console')
const fs= require('fs')

// Synchronous

// Reading a file text
const readText = fs.readFileSync('./read.txt', 'utf-8')
// console.log(readText)

// Writing a text
const writtenText = fs.writeFileSync('./read1.txt', readText+" fuck you ")
// console.log(writtenText);



// Asynchronous

// Read file
fs.readFile('./read.txt', 'utf-8', (err, data) => {
    if (err){
        throw Error("Errpr reading  text")
    }
    // console.log(data);    

    // Writing  aAsynchoronuslly
    fs.writeFile('./read2.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error('Error Writing data')
        }        
    })
})

console.log("testing asynchronously");
