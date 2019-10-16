const path = require('path');
const controller = require('../../controllers/url');

module.exports = (app) => {
    app.post('/api/v1/url/', controller);
};