const OngController = require('../controllers/OngController');
const CreateOngValidator = require('../validators/ong/CreateOngValidator');

module.exports = function(router) {
    router.get('/ongs', OngController.index);
    router.post('/ongs', CreateOngValidator, OngController.create);
};