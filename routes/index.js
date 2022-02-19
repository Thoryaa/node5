const { response } = require('express');
var express = require('express');
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

module.exports = router;