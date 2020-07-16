const express = require('express');
const routes = require("./routes");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// mongoose.connect('mongodb+srv://projetosMongo:projetosMongo@basemongo-xgaad.mongodb.net/aircnc=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://192.168.15.6:27017/projetosMongo',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333);
