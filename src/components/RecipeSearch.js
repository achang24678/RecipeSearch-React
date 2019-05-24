import React, { useContext } from 'react';
import { UserContext } from '../App';

export const RecipeSearch = ({ handleSubmit, handleChange }) => {
    const { search } = useContext(UserContext);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                            Search for recipe with <strong className="text-danger">Food2Fork</strong>
                        </h1>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <label htmlFor="search" className="text-capitalize">
                                type recipes seperated by comma
                            </label>
                            <div className="input-group mt-3">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="chicken,onions,carrots"
                                    className="form-control input_search"
                                    value={search}
                                    onChange={handleChange}
                                />
                                <div className="input-group-append">
                                    <button
                                        type="submit"
                                        className="input-group-text bg-dark text-white input_search"
                                    >
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RecipeSearch;