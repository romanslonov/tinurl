const db = require('../../db');
const controller = require('../../controllers/urlController');

module.exports = (app) => {
    app.get('/:code', controller);
};
