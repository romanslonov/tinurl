const path = require('path');
const controller = require('../../controllers/index');

module.exports = (app) => {
    app.get('/', controller);
};