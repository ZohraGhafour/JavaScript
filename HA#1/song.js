var song = 'Song';
var year = 2018;
var artist = 'artist';
var genere = 'genere';
var duration = 10;
var publisher = 'publisher';

console.log("Song Name Var:" + song);
console.log("Year Released Var:" + year);
console.log("artist Var:" + artist);
console.log("genere Var:" + genere);
console.log("duration Var:" + duration);
console.log("publisher Var:" + publisher);

function Song(song, year, artist, genere, duration, publisher){
this.song = song;
this.year = year;
this.artist = artist;
this.genere = genere;
this.duration = duration;
this.publisher = publisher;
this.printdetails = function (){
	console.log("Song Name:" + this.song);
	console.log("Year Released:" + this.year);
	console.log("artist:" + this.artist);
	console.log("genere:" + this.genere);
	console.log("duration:" + this.duration);
	console.log("publisher:" + this.publisher);
}
};

var song = new Song(song, year, artist, genere, duration, publisher);
song.printdetails();