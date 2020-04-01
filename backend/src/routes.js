const express = require('express');
const router = express.Router();

const glob = require('glob');
const path = require('path');

glob.sync('src/routes/**/*.js').forEach(function(file) {
    require(path.resolve(file))(router);
});

module.exports = router;