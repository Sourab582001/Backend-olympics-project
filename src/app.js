const express = require("express");
const app = express();
require("../src/db/conn")
const MenRanking = require("../src/models/mens")
const router = require("./routers/men")
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, ()=>{
    console.log(`Connect live at port No. ${port}`);
});