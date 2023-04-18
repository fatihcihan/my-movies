import React from 'react';
import serialize from 'form-serialize'

class AddMovie extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        console.log(newMovie);
        this.props.onAddMovie(newMovie);
    }

    render() {
        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <div className="row mb-3 mt-2">
                        <div className="col-10">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input name="name" type="text" className="form-control" placeholder="Enter name" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="mb-3">
                                <label className="form-label">Rating</label>
                                <input name="rating" type="number" className="form-control" placeholder="Enter rating" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Image URL</label>
                                <input name="imageUrl" type="text" className="form-control" placeholder="Enter image url" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Overview</label>
                                <textarea name="overview" className="form-control" rows="5" placeholder="Enter overview"></textarea>
                            </div>
                            <input type="submit" className="btn btn-success btn-block" value="Add Movie" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMovie;