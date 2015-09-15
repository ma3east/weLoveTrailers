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

var dami = {
  name: "Damimister",
  email: "dami@gmail.com",
  password: "password"
};
db.users.save(dami);

var sam = {
  name: "Sam the Man",
  email: "sam@gmail.com",
  password: "password"
};
db.users.save(sam);

//-----Movies-----

var batman = {
  title: "Batman",
  description: "I am the Batman",
  released: "2014-02-11",
  genre: "Action"
};
db.movies.save(batman);

var batgirl = {
  title: "batgirl",
  description: "i am batgirl",
  released: "2013-02-11",
  genre: "action"
};
db.movies.save(batgirl);

var superman = {
  title: "Superman",
  description: "I am Superman",
  released: "2012-02-11",
  genre: "Action"
};
db.movies.save(superman);


//-----Trailers-----

var batmanTrailer = {
  movieId: batman._id,
  name: "Batman",
  description: "batman trailer",
  image: "an image of batman",
  rating: "4"

};
db.trailers.save(batmanTrailer);
