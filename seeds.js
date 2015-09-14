db.dropDatabase();

//-----Users-----

var andrea = {
  name: "Andrea",
  email: "andrea@gmail.com",
  password: "password"
};

db.users.save(andrea, function(err){
  if(err) {
    return handleError(err);
  } else {
    console.log("Andrea you are in the database");
  }
});

//-----Movies-----

var batman = {
  title: "Batman",
  description: "I am the Batman",
  released: "2014-02-11",
  genre: "Action",

};
db.movies.save(batman);

//-----Trailers-----

var batmanTrailer = {
  movieId: batman._id,
  name: "Batman",
  description: "batman trailer",
  image: "an image of batman",
  rating: "4"

};
db.trailers.save(batmanTrailer);


// var trailerSchema = new mongoose.Schema({
//   movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },  // id for actual movie trailer belongs to
//   similarId: { type: Schema.Types.ObjectId, ref: 'Movie' },  // id for movies similar to the movie
//   name: String,
//   description: String,
//   released: Date,
//   image: String,
//   url: String,
//   rating: Number // your own rating for the trailer

// });
