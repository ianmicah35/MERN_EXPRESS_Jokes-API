const Joke = require("../models/joke.model");

//READ all jokes
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(alljokes => res.json({jokes: alljokes}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

//READ one joke
module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params._id})
        .then(Onejoke => res.json({joke: Onejoke}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

//CREATE a new joke
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.status(400).json(err));
}

//UPDATE an existing joke
module.exports.updateJoke = (req,res) => {
    Joke.update({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.status(400).json(err))
}

//DELETE an existing joke
module.exports.deleteJoke = (req,res) => {
    Joke.remove({_id: req.params._id})
        .then(delJoke => res.json({message: "Deleted your terrible joke"}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

//READ a random joke
module.exports.findRandom = (req,res) => {
    //Get my array of jokes
    //Get a random index number from it
    //Pass the joke at that random index number along
    //Catch => throw an error
    Joke.find()
        .then(jokes => {
            let rand = Math.floor(Math.random()*jokes.length);
            res.json({joke: jokes[rand]});
        })
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}