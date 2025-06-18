require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((err) => console.error("Error occured in connecting database", err));

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./Routes/user.routes");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running Successfully");
});
