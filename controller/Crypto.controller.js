'use strict';

const axios = require('axios');
const OwnerModel = require('../model/crypto.modal')

const getCryptoData = (req, res) => {
    axios.get('https://api.sampleapis.com/coffee/hot')
        .then(crypto => {
            // console.log(crypto);
            res.send(crypto.data)
        })
};


const getfavList = (req, res) => {
    let email = req.params.email;


    OwnerModel.find({ email: email }, (error, docs) => {
        // console.log(email);
        console.log(docs)
        if (error) {
            res.send(error.message)
        } else {
            if (docs) {

                res.send(docs)
            } else {
                res.send(error.message)
            }
        }
    })



}
function AddtotheFav (req, res) {
    const { title, description } = req.body;
    let email = req.params.email;
    OwnerModel.findOne({ email: email }, (err, ele) => {
      ele.cryptoS.push({
        title: title,
        description: description,
      });
      ele.save();
      res.send(ele);
    });
  }




const deletetheFav = (req, res) => {
    let email = req.params.email;
    let id = req.params.id;
    OwnerModel.findOne({ email: email }, (error, ele) => {
        ele.cryptoS.splice(id, 1)
        ele.save();
        res.send(ele)
    }
    )



}


const updatetheFav = (req, res) => {
    const { title, id, description, toUSD, image_url } = req.query;

    const crybtoObject = {
        title: title,
        description: description,
        toUSD: toUSD,
        image_url: image_url,
        id: id
    }

    const response = OwnerModel.updatOne(
        { id: req.params.id },
        crybtoObject
    );
    res.send(response);

}


module.exports = { getCryptoData, getfavList, AddtotheFav, deletetheFav, updatetheFav };
