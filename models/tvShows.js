const { Schema, model } = require("mongoose");

const TvShowSchema = new Schema({
    title: { type: String, required:true },
    year: { type: Number, required:true },
    country: { type: String },
    poster: { type: String },
    seasons: { type: Number },
    genre: {
      type: String,
      enum: ["Drama", "Fantasy", "Sci-Fi", "Thriller", "Comedy"]
    },
    summary: { type: String, required:true }
})
module.exports=model('TvShow',TvShowSchema);
