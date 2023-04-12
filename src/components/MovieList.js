import React from 'react';

class MovieList extends React.Component {
    render() {
        return (
            <div className="row">

                {this.props.movies.map((movie) => (
                    <div className="col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img className="card-img-top" alt='Sample Movie' src={movie.imageUrl} />
                            <div className="card-body">
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className='btn btn-outline-danger' type="button">Delete</button>
                                    <h2><span className='border-right'>{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        );
    }
}


export default MovieList;