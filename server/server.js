const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT;

//DB connection
const Database = process.env.DATABASE.replace(
  '<password>',
  process.env.PASSWORD
);

mongoose
  .connect(Database)
  .then(() => {
    console.log(`Connection to DB established`);
  })
  .catch((err) => console.log(err));

// Server connection
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
