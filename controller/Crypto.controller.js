'use strict';

const { default: axios } = require("axios");


const getCryptoData = (req, res) => {
    axios.get('https://crypto-explorer.herokuapp.com/crypto-list/')
        .then(crypto => {
            console.log(crypto);
            res.send(crypto.data)
        })
};


const getfavList = (req, res) => {

    CrypetoModel.find({}, (error, document) => {
        if (error) {
            res.send(error.message)
        } else {
            if (document) {
                res.send(document)
            } else {
                res.send(error.message)
            }
        }
    })



}

const AddtotheFav = (req, res) => {
    const { title, id, description, toUSD, image } = req.query;

    const crybtoObject = {
        title: title,
        description: description,
        toUSD: toUSD,
        image: image,
        id: id
    }

    CrypetoModel.findOne({ id: id }, (error, docs) => {
        if (error) {
            res.send('error')
        } else {
            if (docs) {
                res.send('exist')
            } else {
                let newcrypto = new CrypetoModel(crybtoObject);
                newcrypto.save();
                res.send(crybtoObject)
            }
        }
    })
}


const deletetheFav = (req, res) => {
   const response = CrypetoModel.deleteOne(
        { id: req.params.id }
    )

    res.send(response)

}


const updatetheFav = (req, res) => {
    const { title, id, description, toUSD, image } = req.query;

    const crybtoObject = {
        title: title,
        description: description,
        toUSD: toUSD,
        image: image,
        id: id
    }

    const response = CrypetoModel.updatOne(
        { id: req.params.id },
        crybtoObject
    );
 res.send(response) ;
  
}


module.exports={getCryptoData, getfavList, AddtotheFav, deletetheFav, updatetheFav};
