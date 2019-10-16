require('dotenv').config();

const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.use(express.static('public'));

fs.readdirSync(`${__dirname}/routes/v1/`).forEach((file) => {
    require(`./routes/v1/${file}`)(app);
});

const { PORT, HOSTNAME } = process.env;

app.listen(PORT, HOSTNAME, () => console.log(`Server running http://${HOSTNAME}:${PORT}`));