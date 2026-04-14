const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        status: "OK",
        service: "API Running"
    })
})

app.use('/ai', aiRoutes)

module.exports = app