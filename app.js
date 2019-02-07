const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use("/style",express.static(__dirname + "/style"));

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Wuba luba dub dub '+PORT));