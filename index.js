require('dotenv').config();

const fs = require('fs');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({ extended: false }));
app.use(express.static('public/dist'));

fs.readdirSync(`${__dirname}/routes/v1/`).forEach((file) => {
    require(`./routes/v1/${file}`)(app);
});

const { PORT, HOSTNAME, NODE_ENV } = process.env;

app.listen(PORT, HOSTNAME, () => console.log(`Server running http://${HOSTNAME}:${PORT} in ${NODE_ENV} mode.`));