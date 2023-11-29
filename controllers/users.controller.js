const model = require('../models/users.model');

function getHome(req, res) {
    res.send("hello world!");
}

function getUsers(req, res) {
    res.json(model);
}

function getUser(req, res) {
    const userId = Number(req.params.userId);
    const user = model[userId];
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

function postUser(req, res) {
    if (!req.body.hasOwnProperty("name")) {
        return res.status(400).json({
            error: 'Missing user name'
        });
    }

    const newUser = {
        name: req.body.name,
        id: model.length
    }
    model.push(newUser);
    res.json(newUser);
}



module.exports = {
    getHome,
    getUser,
    getUsers,
    postUser,
};