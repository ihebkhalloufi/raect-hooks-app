import { useState } from 'react';
import './App.css';
import MainNavbar from './Components/MainNavbar';
import MovieCard from './Components/MovieCard';
import AddMovies from './Components/AddMovies';

function App() {
  const [movies, setMovies] = useState([
      {
  id: Math.random(),
    title: 'Venom: Let There Be Carnage',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAfIPtd8gdl6iYs0rHZDbpzEo98OkyLDa5GKbo9ePgwQhkgXBBFX37qfXsw1TWbuR_m0&usqp=CAU',
    date: 2021,
    rate: 4
},
{
  id: Math.random(),
    title: 'Nobody',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TOTPfB6qEuthoZ9OyjIwOqafQmbs8Ace8C8TFppn5h-iLk48Vdd_m48ilHmq808ksXU&usqp=CAU',
    date: 2021,
    rate: 4
},
{
  id: Math.random(),
    title: 'Zootopia',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/8b/89/0e/8b890ec5-4ccd-573b-c079-4cd8fb1eda4f/pr_source.jpg/268x0w.jpg',
    date: 2016,
    rate: 5
},
{
  id: Math.random(),
    title: 'Spider man no way home',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTEEwl8NmwPJlBE7-8aBTqhikzZ7P6ykp6Q&usqp=CAU',
    date: 2022,
    rate: 5
},
{
  id: Math.random(),
    title: 'Im legend',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Video/b7/ca/6a/mzi.xiydnopk.jpg/268x0w.jpg',
    date: 2007,
    rate: 4
},
{
  id: Math.random(),
    title: 'Captain Marvel',
    image: 'https://thepowerzone.files.wordpress.com/2019/04/affiche-film-captain-marvel-2019.jpg?w=736',
    date: 2019,
    rate: 3
},
{
  id: Math.random(),
    title: 'Prophetie',
    image: 'http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/92/93/38/20225969.jpg',
    date: 2012,
    rate: 1
},
{
   id: Math.random(),
    title: 'RESISTANCE',
    image: 'https://m.media-amazon.com/images/M/MV5BMTUwNTE1OTQ5Ml5BMl5BanBnXkFtZTgwNzI5MzcwMzE@._V1_.jpg',
    date: 2011,
    rate: 2
}
])
const[newMovie,setNewMovie] = useState ({
  id: Math.random(),
  title: " ",
  image: " ",
  date: " ",
  rate: 0 ,
});
const[search,setSearch] = useState (" ");
const[rating , setRating] = useState(0);
const[toggle, setToggle] =useState (false)
const handleRating = (newRating) =>
setRating(newRating) ;
const handleSearch= (search) => {
  setSearch(search.target.value);
};
const handleModal = () => {
  setToggle(!toggle);
if ( newMovie.title.length !== 0 && newMovie.image.length !== 0 ) {
  setMovies ([...movies,newMovie]); setToggle(!toggle);
}
else {setToggle(!toggle)}
};
const handleAddMovie = (e) => {
(setNewMovie( e.target.title)) 
}
  return (
    <div className="App">
      <MainNavbar search={search} 
      handleSearch={handleSearch}
       rating={rating}
        handleRating={handleRating}
        handleModal={handleModal}/>
    <MovieCard movies={movies} search={search}/>
    <AddMovies 
    toggle={toggle} 
    handleModal={handleModal}
    newMovie={newMovie}
    handleAddMovie={handleAddMovie}/>
    </div>
  );
}

export default App;
