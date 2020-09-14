const app = require('express')()
const connection =  require('./config/mysql')
const port = 3001

connection.ping(function(err) {
    if(err) throw err

    console.log('Funcionando')
})

app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`)
})