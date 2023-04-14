import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends React.Component {
    state = {
        movies: [],
        searchQuery: ""
    }


    // Axios (Get)
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }

    // Axios (Delete)
    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`);
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    } 

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        );
    }
}

export default App;