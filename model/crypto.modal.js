

const cryptoSchema = new mongoose.Schema({
    title: String,
    description: String,
    toUSD: String,
    image: String
});


const CrypetoModel = mongoose.model('Crypeto ', cryptoSchema);


function seedfunction() {

    const user = [

        {
            email: 'v.salvatore7.gs@gmail.com ',
            cryptoS: {

                "id": 2,
                "title": "Bitcoin",
                "description": "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
                "toUSD": "48,285.50",
                "image_url": "https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg"

            }
        },

        {
            email: 'suze-hiary@hotmail.com ',
            cryptoS: {

                "id": 5,
                "title": "DashCoin",
                "description": "Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization run by a subset of its users, which are called \"masternodes\".",
                "toUSD": "227.77",
                "image_url": "https://mibitcoin.news/wp-content/uploads/2021/02/moneda-de-dashcoin-con-dolares-de-fondo.jpg"
            }
        }
    ]

    console.log(user);
    user.save() ;
    
}

seedfunction() ;