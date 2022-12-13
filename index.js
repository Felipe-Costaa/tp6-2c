const express = require('express')
const customerRouter = require('./src/route/router.customer')

const app = express()
app.use(express.json())
app.use('/api/v1/customer', customerRouter)

app.listen(8087, () => console.log('Server up'))