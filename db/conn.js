const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://project:demoProject@cluster0.pivma.mongodb.net/demo?retryWrites=true&w=majority")
    .then(() => {
        console.log(`Database Connected`);
    })
    .catch((err) => {
        console.log(`Database Not Connected`);
    })  