import React from 'react';

class MovieList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" alt='Sample Movie' src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" />
                        <div className="card-body">
                            <h5 className='card-title'>Sample Movie</h5>
                            <p className='card-text'>Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <a className='btn btn-outline-danger' type="button">Delete</a>
                                <h2><span className='border-right'>9.0</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MovieList;