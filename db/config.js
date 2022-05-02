const mongoose=require('mongoose');
const dbConnection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/TvShows",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log("DB Online");
    } catch (error) {
        console.log(error);
        throw new Error(`Error al inicializar DB: ${error}`);
    }
}
module.exports={
    dbConnection
}