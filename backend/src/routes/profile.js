const ProfileValidator = require('../validators/profile/ProfileValidator');
const ProfileController = require('../controllers/ProfileController');

module.exports = function(router) {
    router.get('/profile', ProfileValidator, ProfileController.index);
}