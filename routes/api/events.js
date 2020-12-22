const express = require('express')
const router = express.Router();

//events model
const Events = require('../../models/Events');


// @routes GET api/events
// @desc GET All events
router.get('/', async (req, res) => {
    try {
        const events = await Events.find();
        if (!events) {
            throw Error('No Events');
        }
        res.status(200).json(events);
    } catch (err) {
        res.status(400).json({ msg: err })

    }
})

// @routes GET api/events/:id
// @desc GET specific event
router.get('/:id', async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);
        if (!event) throw Error('No Event found');
        
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json({ msg: err })

    }
});

// @routes POST api/events
// @desc Create an event

router.post('/', async (req, res) => {
    const newEvent = new Events(req.body);
    try {
        const event = await newEvent.save();
        if (!event) throw Error('Something went wrong while saving the event.');

        res.status(200).json(event);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @routes DELETE api/events
// @desc delete an event
router.delete('/:id', async (req, res) => {
    try {
        const event = await Events.findByIdAndDelete(req.params.id);
        if (!event) throw Error('No Event Found!');
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ msg: error })

    }
})

// @routes UPDATE api/events
// @desc update an event
router.patch('/:id', async (req, res) => {
    try {
        const event = await Events.findOneAndUpdate(req.params.id, req.body);
        if (!event) throw Error('Update Failure! Something went wrong.');
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ mgs: error })

    }
})


module.exports = router;