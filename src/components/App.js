import React from 'react';
import MovieList from './MovieList';

class App extends React.Component {
    state = {
        movies: [
            {
                id: 1,
                name: "Matrix",
                rating: 9,
                overview: "Lorem ipsum matrix, dolor sit amet consectetur adipisicing elit. Tempore, itaque?",
                imageUrl: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
            },
            {
                id: 2,
                name: "Interstellar",
                rating: 8,
                overview: "Lorem ipsum interstellar, dolor sit amet consectetur adipisicing elit. Tempore, itaque?",
                imageUrl: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },
            {
                id: 3,
                name: "The Game",
                rating: 8.5,
                overview: "Lorem ipsum the game, dolor sit amet consectetur adipisicing elit. Tempore, itaque?",
                imageUrl: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4UOa079915QjiTA2u5hT2yKVgUu.jpg"
            }
        ]
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        {/* <SearchBar /> */}
                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                />
            </div>
        );
    }
}

export default App;