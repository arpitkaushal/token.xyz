// set up the app
const express = require("express");
const app = express();

// // misc dependencies
// const fs = require("fs");
// const dotenv = require("dotenv");
// dotenv.config();

// // Connect to DB
// const mongoose = require("mongoose"); //manages DB connection
// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//     })
//     .then(() => console.log("DB Connected")) // if successful
//     .catch((e) => console.log(`DB connection Error: ${e}`)); // if not successful
// //

// // bring in routes
// const blogRoutes = require("./routes/blog");
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/user");
// const commentRoutes = require("./routes/comment");

app.get("/", (req, res) => {
    res.send("Jai Shri Krishna")
});


const port = process.env.PORT || 5000 || 8081;
app.listen(port, () => {
    console.log(`App running on port: http://localhost:${port}`);
});
