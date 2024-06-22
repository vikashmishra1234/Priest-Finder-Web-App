const express = require("express");
const dotenv = require('dotenv');
const Connection = require('./Database/database');
const Router = require('./routes/Route');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/',Router);

const Port = 5000;



Connection();
app.listen(Port,()=>console.log(`server running http://localhost:${Port}`));