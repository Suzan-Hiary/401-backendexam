'use strict';
const mongoose = require('mongoose');

// const cryptoSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     toUSD: String,
//     image_url: String
// });




const OwnerSchema = new mongoose.Schema({
    email: { type: String, unique: true, dropDups: true },

    cryptoS: Array
})

const OwnerModel = mongoose.model("crypeto", OwnerSchema);
function seedfunction() {

    let user1 = new OwnerModel({
        email: 'v.salvatore7.gs@gmail.com',
        cryptoS: [
            {
                id: 2,
                title: "Bitcoin",
                description: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
                toUSD: "48,285.50",
                image_url: "https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg"
            }
        ]
    });

    let user2 = new OwnerModel({
        email: 'suzanhiary4@gmail.com',

        cryptoS: [
            {
                "title": "Cappuccino",
                "description": "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
                "ingredients": [
                "Espresso",
                "Steamed Milk",
                "Foam"
                ],
                "id": 3
                },
                {
                "title": "Americano",
                "description": "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
                "ingredients": [
                "Espresso",
                "Hot Water"
                ],
                "id": 4
                },]

    })


    // console.log(user2)
    user1.save().then(() => console.log('created')).catch(() => console.log('doublected'))
    user2.save().then(() => console.log('created')).catch(() => console.log('doublected'))

}






seedfunction();



module.exports = OwnerModel;