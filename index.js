const express = require('express');

// Router Pages
const userRoute = require('./routes/UserRoute');
const Rawmaterials = require('./routes/RawmaterialRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth',userRoute);
app.use('/api/v1',Rawmaterials);

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`server is running at http://localhost:${port}`) });
