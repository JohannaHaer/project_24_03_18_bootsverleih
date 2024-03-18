import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import bootRouter from './controller/boote.js'

await mongoose.connect(process.env.MONGODB_URI)

const PORT = 3010
const app = express()

app.use(cors({origin: 'http://localhost:5174'}))
app.use('/boote', bootRouter)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})