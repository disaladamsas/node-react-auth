const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const filterObj = require('../../utility/filterObj');

router.get('/', (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
        req.userData = decoded;
        console.log('getAuth Success');
        res.status(201).json({ message: 'Auth success', user: decoded });
    } catch (error) {
        console.log('getAuth Failed');
        res.status(401).json({ message: 'Auth failed' });
    }
});

module.exports = router;
