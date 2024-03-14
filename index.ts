import express from 'express'
import morgan from 'morgan'
const userRouter = require('./routes/users')

const app = express()

const PORT: string = process.env.PORT || '8000'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`)
})
