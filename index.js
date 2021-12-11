const express = require("express");
const app = express();
require("dotenv").config();
require("./db/conn");

const PORT = process.env.PORT || "8000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====> Route Files <===== //
const authRouter = require("./routes/auth.route");

app.use("/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server Runnig At Port : ${PORT}`);
})