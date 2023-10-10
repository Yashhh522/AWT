require("dotenv").config();
const express = require("express");
const connectDB = require("./dbConfig");
const User = require("./model/user");
const Profile = require("./model/profile");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); 

app.use(express.json());

