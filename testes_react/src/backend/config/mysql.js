const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
})

connection.connect(function(err) {
    if(err) {
        console.log(`Connection Error: ${err.stack}`)
        return
    }

    console.log(`Connected as ID: ${connection.threadId}`)
})


module.exports  = connection
