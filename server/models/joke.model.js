const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "You need to set up your joke!"],
        minlength: [10, "Your joke is too short!"]
    },
    punchline: {
        type: String,
        required: [true, "...So what's the joke?"],
        minlength: [3, "Maybe try that again"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;