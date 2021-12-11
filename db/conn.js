const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://TD:td_Database@cluster0.mfeba.mongodb.net/test")
    .then(() => {
        console.log(`Database Connected`);
    })
    .catch((err) => {
        console.log(`Database Not Connected`);
    })  