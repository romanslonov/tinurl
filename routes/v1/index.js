const path = require('path');
const controller = require('../../controllers/indexController');

module.exports = (app) => {
    app.get('/', controller);
};