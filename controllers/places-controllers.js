const { v4:uuid } = require("uuid");

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


const createPlace = (req, res, next) => {
    const { title, description, coordinates, address, creator } = req.body;
    const createdPlace = {
        id: uuid(),
        title,
        description,
        location: coordinates,
        address,
        creator
    };

    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place: createdPlace});
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;