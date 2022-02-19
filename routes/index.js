const { response } = require('express');
var express = require('express');
const req = require('express/lib/request');
const app = express();
var router = express.Router();
const axios = require("axios").default;
app.set('view engine', 'ejs');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
    axios.get("https://dummyjson.com/products").then(data => {
        res.render('products', { title: 'products here', products: data.data.products });
    });

});
router.get('/products/:number?', function(req, res) {
    axios.get("https://dummyjson.com/products").then(data => {
        var num = req.params.number;
        if (num != null) {
            res.render('specificproduct', { title: 'products here', products: data.data.products[num] });

        }


    });

});


module.exports = router;