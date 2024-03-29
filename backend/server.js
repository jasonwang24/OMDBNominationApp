const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const emailsRouter = require('./routes/emails');

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/emails', emailsRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});