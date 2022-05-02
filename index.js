const express= require('express');
const cors= require('cors');
const { dbConnection } = require('../API_Rest_MEN/db/config');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());
app.use('api/tvShows',require('../API_Rest_MEN/routes/tvShowsRoutes'));
//DB connection
dbConnection();

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto: ${ process.env.PORT }`)
});
