const controller = require('../../controllers/code');

module.exports = (app) => {
    app.get('/:code', controller);
};
