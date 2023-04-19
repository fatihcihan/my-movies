import React from 'react';
import axios from 'axios';

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overiview: "",
        imageUrl: ""
    }

    async componentDidMount() {
        const id = window.location.pathname.replace("/edit/", "")
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        const movie = response.data;

        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageUrl: movie.imageUrl,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (

            < div className="container" >
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <div className="row mb-3 mt-2">
                        <div className="col-10">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={this.state.name} />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="mb-3">
                                <label className="form-label">Rating</label>
                                <input name="rating"
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter rating"
                                    value={this.state.rating} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Image URL</label>
                                <input name="imageUrl"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter image url"
                                    value={this.state.imageUrl} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Overview</label>
                                <textarea name="overview"
                                    className="form-control"
                                    rows="5"
                                    placeholder="Enter overview"
                                    value={this.state.overview}></textarea>
                            </div>
                            <input type="submit" className="btn btn-success btn-block" value="Add Movie" />
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default EditMovie;