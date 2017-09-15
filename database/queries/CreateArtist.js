const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
  //console.log(artistProps);
  //const { name, age, genre, yearsActive } = artistProps;
  //const artist = new Artist({ name, age, genre, yearsActive });
  const artist = new Artist(artistProps);
  return artist.save();
};
