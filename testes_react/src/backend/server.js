const express = require('express')
const app = express()

const routes = require('./routes')
app.use(express.json())
app.use(routes)

const port = 3131

app.listen(port, () => {
    console.log('Backend rodando na porta ' + port)
})