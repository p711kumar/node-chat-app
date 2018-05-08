const express = require('express');
const path = require('path');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(publicPath));


app.listen(5000, () => {
    console.log(`node server started at port ${port}`);
});
