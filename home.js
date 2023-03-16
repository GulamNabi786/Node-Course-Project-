const express = require('express');
const rooter = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello'});
});

module.exports = router;