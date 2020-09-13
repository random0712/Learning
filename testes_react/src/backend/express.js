const app = require('express')()
const port = 3001


app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`)
})