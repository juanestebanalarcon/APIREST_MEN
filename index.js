const express= require('express');
const cors= require('cors');
const { dbConnection } = require('../API_Rest_MEN/db/config');
require('dotenv').config();

const app=express();
dbConnection();
app.use(cors());
app.use(express.json());
app.use('/api/tvShows',require('../API_Rest_MEN/routes/tvShowsRoutes'));
//DB connection

app.listen(9000, () =>{
    console.log(`Servidor corriendo en el puerto: 9000`);
});
