const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Person = require('./models/person');
const personsRouter = require('./controllers/persons');
const middleware = require('./utils/middleware');
const { MONGODB_URI } = require('./utils/config');

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message);
  });

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('phonebookbackend');
});

app.get('/info', (request, response, next) => {
  Person.find({})
    .then((persons) => {
      response.send(
        `<p>Phonebook has info for ${persons.length} people</p>
                <p>${new Date().toString()}</p>`
      );
    })
    .catch((error) => next(error));
});

app.use('/persons', personsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
