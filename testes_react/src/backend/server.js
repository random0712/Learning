const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const routes = require('./routes')
app.use(express.json())
app.use(routes)

require('./database')

const port = 3131

app.listen(port, () => {
    console.log('Backend rodando na porta ' + port)
})