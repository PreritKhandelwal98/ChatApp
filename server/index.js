const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/connectDB')

const router = require('./routes/index')

const cookiesParser = require('cookie-parser')

const { app, server } = require('./socket/index')
//const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }))
app.use(express.json());
app.use(cookiesParser());
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send("<h1>Hello from server</h1>")
})

//api route call
app.use('/api', router);

connectDB().then(() => {
    console.log("DB connected successfully")
})
server.listen(port, () => {
    console.log(`Server is running on the port: ${port}`);
})