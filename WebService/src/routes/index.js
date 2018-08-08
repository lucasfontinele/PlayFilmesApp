const express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let status = {ok: true, code: res.statusCode, message: "O WebService está ativo no momento!"};
    res.status(200).send(JSON.stringify(status));
});

module.exports = router;