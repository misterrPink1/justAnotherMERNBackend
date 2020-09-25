const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Hello',
        description: 'tester',
        location: {
            lat: 0.000,
            lng: 0.999 
        },
        address: 'hello world',
        creator: 'u1'
    }
]

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid; // { pid: 'p1'}

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if (!place){
        const error = new Error('Could not find place with the given place Id.' );
        error.code = 404;
        return next(error);
    }

    res.json({place});
});

router.get('/user/:uid', (req,res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator == userId;
    });

    if (!place){
        const error = new Error('Could not find place with the given user Id.' );
        error.code = 404;
        return next(error);
    }

    res.json({place});
});


module.exports = router;