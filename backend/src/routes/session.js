const SessionController = require('../controllers/SessionController');

module.exports = function(router) {
    router.post('/sessions', SessionController.create);
}