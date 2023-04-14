import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-3 mt-2">
                    <div className="col-10">
                        <input
                            onChange={this.props.searchMovieProp}
                            type="text" className="form-control" placeholder="Search a movie"
                        />
                    </div>
                    <div className="col-2">
                        <button type="button"
                            className="btn btn-primary"
                            style={{ float: "right" }}
                        >Add Movie
                        </button>
                    </div>
                </div>
            </form>

        );
    }
}

export default SearchBar;