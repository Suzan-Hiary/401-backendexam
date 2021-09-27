// const express = require('express');

// const cors = require('cors');

// const axios = require('axios');

// require('dotenv').config();

// const app = express();

// app.use(cors());

// app.use(express.json());
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/finalexam', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



// const PORT = process.env.PORT;
// const { getCryptoData,
//     getfavList,
//     AddtotheFav,
//     updatetheFav,
//     deletetheFav

// } = require('./controller/Crypto.controller')



// app.get('/Crypto', getCryptoData);
// app.get('/fav-Crypto/:email', getfavList);
// app.post('/favorite/:email', AddtotheFav);
// app.put('/favorite/:id', updatetheFav);
// app.delete('/favorite/:email/:id', deletetheFav);



// app.listen(PORT, () => {
//     console.log(`listening at ${PORT}`)
// })

'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
const axios = require('axios');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exam')



const FlowerSchema = new mongoose.Schema({
    name: String,
    photo: String
})
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    flowers: [FlowerSchema]
})

const UserModal = mongoose.model('flower', UserSchema);

const seedfunction = () => {
    let suzan = new UserModal({
        email: 'suzanhiary4@gmail.com',
        flowers: [

            {
                "instructions": "Drought tolerant, well drained soil. Prefers full sun.",
                "photo": "https://ibizaloe.com/wp-content/uploads/2021/05/flor-de-aloe-vera.jpg",
                "name": "Aloe Vera"
            },
            {
                "instructions": "Easy to care for, requiring watering only when they’re dry. They like bright but indirect light.",
                "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Schlumbergera_Buckleyi_Group.jpg/220px-Schlumbergera_Buckleyi_Group.jpg",
                "name": "Schlumbergera"
            },
        ]
    })
    suzan.save().then(() => console.log('done')).catch(() => console.log('done twice'))
}
seedfunction()

const getAllFlower = (req, res) => {
    axios.get('https://flowers-api-13.herokuapp.com/getFlowers')
        .then(result => {
            res.send(result.data)
        })
}
const getfavlist = (req, res) => {
    let email = req.params.email;
    UserModal.findOne({ email: email }, (err, doc) => {
        if (err) {
            res.send(error.message)
        } else {
            res.send(doc)
        }

    })

}


const posttofav = (req, res) => {
    let email = req.params.email;
    let { name, photo } = req.body;

    UserModal.findOne({ email: email }, (err, user) => {
        user.flowers.push({
            name: name,
            photo: photo
        })
        user.save();
        res.send(user)
    })
}


const deletefav = (req, res) => {
    let id = req.params.id;
    let email = req.params.email;

    UserModal.findOne({ email: email }, (err, item) => {
        item.flowers.splice(id, 1);
        item.save();
        res.send(item)
    })
}



const updatefav = (req, res) => {
    let id = req.params.id;
    let { name, photo } = req.body;
    let data = {
        name: name,
        photo: photo
    }
UserModal.findOne({id:id} , (err,element)=>{
    element.flowers.splice(id,1,data);
    element.save()
    res.send(element)
})


}




app.get('/flower', getAllFlower);
app.get('/favlist/:email', getfavlist);
app.post('/favlist/:email', posttofav);
app.delete('/delete/:email/:id', deletefav);
app.put('/update/:id', updatefav)






app.listen(PORT, () => {
    console.log(`listen to ${PORT}`)
})