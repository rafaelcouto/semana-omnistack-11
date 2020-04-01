/*
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')
const router = express.Router();

router.post('/sessions', SessionController.create);

router.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);



require('./routes/ong')(router);
*/

const express = require('express');
const router = express.Router();

const glob = require('glob');
const path = require('path');

glob.sync('src/routes/**/*.js').forEach(function(file) {
    require(path.resolve(file))(router);
});

module.exports = router;