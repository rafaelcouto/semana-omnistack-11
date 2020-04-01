const IncidentController = require('../controllers/IncidentController');
const DeleteIncidentValidator = require('../validators/incident/DeleteIncidentValidator')
const ListIncidentValidator = require('../validators/incident/ListIncidentValidator');

module.exports = function(router) {
    router.get('/incidents', ListIncidentValidator, IncidentController.index);
    router.post('/incidents', IncidentController.create);
    router.delete('/incidents/:id', DeleteIncidentValidator, IncidentController.delete)
};