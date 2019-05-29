require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rp = require('request-promise');

const configureRequest = ({
    method = 'GET',
    uri = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    ...rest
}) => ({
    method,
    uri,
    headers: { 'X-CMC_PRO_API_KEY': process.env.CMK_APIKEY },
    json: true,
    gzip: true,
    ...rest
})

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.get('/v1/all', (req, res) => {

    const requestOptions = configureRequest({
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        },
    });

    rp(requestOptions).then(response => {
        res.send({
            currencies: response.data.slice(0,24)

        });
    }).catch((err) => {
        res.send(err);
    });    

});

app.get('/v1/crypto', (req, res) => {
    
    const requestOptions = configureRequest({
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
        qs: { symbol: req.query.symbol, price:req.query.quote.USD.price },
    });

    rp(requestOptions).then(response => {
        res.send({
            currency: response.data
        });
    }).catch((err) => {
        res.send(err);
    });    

});



app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });

