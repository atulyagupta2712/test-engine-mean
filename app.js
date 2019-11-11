const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

const config = require('./config/db');

mongoose.connect(config.dbPath);
mongoose.connection.on('connected', ()=>{
    console.log("connection created "+config.dbPath);
});
mongoose.connection.on('error', err=>{
    console.log("Error is "+err);
})

const userRoute = require("./routes/userRoutes");
const teacherRoute = require('./routes/teacherRoutes');

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server started");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response)=>{
    response.send("hey user");
});

app.use("/userRoute", userRoute);

app.use("/teacherRoute", teacherRoute);

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);