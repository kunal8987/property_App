const express = require('express')


const app = express()

app.use(express.json())


app.listen(3500,(err, req, res) => {
    console.log('server running on port ' + req.port);
})
