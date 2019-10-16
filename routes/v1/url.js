const path = require('path');
const controller = require('../../controllers/urlController');

module.exports = (app) => {
    app.post('/api/v1/shorten/', controller);
};