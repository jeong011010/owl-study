const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://jeong011010:jeong1010@kimjazz.ytyfy.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))