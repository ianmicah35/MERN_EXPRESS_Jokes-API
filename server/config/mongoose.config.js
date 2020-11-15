const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_demo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Found the mongoose!"))
    .catch(() => console.log("Where did the mongoose go?!", err))