const express = require(express);

const PORT = 3000
const appp = express()

appp.listen( PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})