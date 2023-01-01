const express = require('express')
const cors = require('cors')
const ConnectionMongoDB = require('./src/services/mongo')
const router = require('./src/routes/post.routes')
const app = express()
const PORT = 5000
ConnectionMongoDB()

app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(PORT, () => console.log('Server running on port ' + PORT))
