import React, { useContext } from 'react';
import { UserContext } from '../App';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export const RecipeList = (props) => {
    const { recipes, err } = useContext(UserContext);
    return (
        <React.Fragment>

            <RecipeSearch handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>

            <div className="container my-5">
                {/*title*/}
                <div className="row">
                    <div className=".col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <h1 className="text-slanted">recipe list</h1>
                    </div>
                </div>
                {/*End of title*/}
                {err && <h1 className="text-danger text-center">{err}</h1>}
                {/*Map recipes array each recipe to Recipe component*/}
                <div className="row">

                    {recipes.map((recipe) => {
                        return (
                            <Recipe key={recipe.recipe_id} {...recipe} handleDetails={props.handleDetails} />
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default RecipeList;