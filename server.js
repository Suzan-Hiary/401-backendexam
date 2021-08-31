const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/finalexam');


const PORT = process.env.PORT;
const { getCryptoData,
    getfavList,
    AddtotheFav,
    updatetheFav,
    deletetheFav

} = require('./controller/Crypto.controller')



app.get('/Crypto', getCryptoData);
app.get('/fav-Crypto', getfavList);
app.post('/favorite', AddtotheFav);
app.put('/favorite/:id', updatetheFav);
app.delete('/favorite/:id', deletetheFav);



app.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
})