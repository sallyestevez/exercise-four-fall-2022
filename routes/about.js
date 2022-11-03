const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});

// define about page route
router.get('/', (req, res) => {
    res.send('<div><h1>About page</h1><h2>This page is about</h2><div>')
});

router.get('/me', (req, res) => {
    res.send([
        {
            "id": "not-me",
            "name": "Nico",
            "message": "Nico Nico Nii"
        },
        {
            "id": "me",
            "name": "Sally",
            "message": "Nico Nico No"
        }
    ])
});

module.exports = router;