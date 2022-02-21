const express = require('express')
const app = express()
const routeURLs = require('./routes/routes')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/app',routeURLs)

app.listen(4000, () => console.log("server is running") )
