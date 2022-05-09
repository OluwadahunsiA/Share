const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
