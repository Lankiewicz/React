var movies = [
  {
	  id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	bohaters: 'Bohaterowie: James Syriusz Potter, Albus Severus Potter, Lily Luna Potter',
	images: 'http://di.com.pl/pic/photo/Screen_Shot_2014_08_21_at_101244_AM_640x834_1408689031.png'
  },
  {
	  id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	bohaters: ' James Earl Jones, Matthew Broderick, Jeremy Irons'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('p', {}, movie.bohaters),
	  React.createElement('img', {src: movie.images})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));