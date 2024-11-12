const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');
const bookRoutes = require('./src/routes/BookRoutes');
const personRoutes = require('./src/routes/PersonRoutes');
const pingRoutes = require('./src/routes/PingRoutes');
const cors = require('cors')

/*------------------------------------------------------*/
const app = express();
app.use(express.json());
app.use(cors())

/*load environment file based on environment configured in start script*/
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname,'environment', process.env.NODE_ENV + '.env')
});

const port = process.env.PORT || 8081;

app.use('/api/book',bookRoutes);
app.use('/api/person',personRoutes);
app.use('/api/ping',pingRoutes);

app.listen(port, () => {
  console.log(`Listening - http://localhost:${port}/api/ping`)
});