import express from "express";
import bodyParser from 'body-parser';


import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());   // Json - Java script notation

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));  // Just a hello to the home page.

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

