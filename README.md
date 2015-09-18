#weLoveTrailers

##WDI_LDN_14 FINAL PROJECT

###Why?

These days the wait for the movie trailers are just as highly anticipated as the wait for the actual movie, over 88 million people watch the official trailer for Star Wars - The Force Awakens within 24 hours. 

I like watching movies and found that when looking at the trailer at the end would be present with films i had not come across before as similar suggestions, i therefore had the idea what if you could watch a video of a trailer and set yourself a reminder to check it out at the cinema, or by the book or rent the movie.

The reminder feature hasn't been implemented in this project as yet, but that will be the next stage i hope to achieve.

##Technologies Used

I experimented with a number of API's for this project, mainly because there are varying levels of data that they offer.

Initially i planned to use [OMDBapi](http://www.omdbapi.com/) for the movie posters.  OMDB, does not require a key, and for single title search offer quite a lot of data, on multiple search queries they only offer title and year of release, also i found they didn't have a lot of the current or films not yet released.

I was then going to use [Trailer Addict](http://www.traileraddict.com/trailerapi), for the poster information, their API also does not require a key. They send their data in XML, which isn't to hard to cover to JSON, however they also did not offer a lot of data.

For the video trailers i decided to use Youtube, it is easy to setup an app and get a developer key, and i cannot think of any other free resource with such a comprehensive amount of data.[Youtube Developers](https://developers.google.com/youtube/v3/)

Finally at the last minute!, i decided to do a quick search and came across [themoviedb API](https://www.themoviedb.org/documentation/api), to use their data you need to register to get an API key. They do seem to offer quite a bit of data, and also they offer details of the latest and future films which was just what i needed. 

NodeJs was use on the backend, with Mongoose and MongoDB for modelling and database.

On the fronted AngularJs was used along with Bootstrap for styling.

##What i learned

APIs are cool!