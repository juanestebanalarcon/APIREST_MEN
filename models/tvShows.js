const { Schema, model } = require("mongoose");

const TvShowSchema = new Schema({
    title: { type: String, required:true, unique:true },
    year: { type: Number, required:true},
    country: { type: String,required:true },
    summary: { type: String, required:true }
})
module.exports=model('TvShow',TvShowSchema);
