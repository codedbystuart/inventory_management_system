const express = require('express');

const ProductsRoute = require('./routes/ProductRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/products', ProductsRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => { });
