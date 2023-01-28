import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { register } from './controllers/auth'

// CONFIGURATION
const __filename = fileURLToPath(import.meta.url)
const __direname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy)
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/assets', express.static(path.join(__direname, 'public/assets')))

// File storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)





    }
})
const upload = multer({ storage });


//Routes with Files
app.post('/auth/register', upload.single('picture'), register)

// Mongoose setup (Database)
const PORT = process.env.PORT || 4567
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    })
}).catch((err) => {
    console.log(`${err} oppps error occured`);
})
