const employeeRoutes = require("./routes/EmployeeRoute");
const express = require("express")

const mongoose = require('mongoose')
require('dotenv').config();

const routes = require ("./routes/EmployeeRoute")

const cors = require('cors')

const app = express()
const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo DB Connected"))
.catch((err)=>console.log(err))

app.use("/api", employeeRoutes);

app.listen(PORT,()=>console.log(`El Puerto es: http://localhost:${PORT}`))