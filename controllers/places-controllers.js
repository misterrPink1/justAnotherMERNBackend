const HttpError = require('../models/http-error');

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

const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid; // { pid: 'p1'}

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if (!place){
        return next(new HttpError('Could not find place with the given user Id.', 404));
    }

    res.json({place});
};

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator == userId;
    });

    if (!place){
        return next(new HttpError('Could not find place with the given user userId.', 404));
    }

    res.json({place});

};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;