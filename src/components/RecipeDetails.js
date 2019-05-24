import React, { useContext, useState, useEffect } from 'react';
import { recipeDetail } from '../tempDetails';
import { UserContext } from '../App';



export const RecipeDetails = ({ handleIndex }) => {

    const { details_id } = useContext(UserContext);
    const [detailRecipe, setDetailRecipe] = useState(recipeDetail);
    const [url2] = useState(
        `https://www.food2fork.com/api/get?key=f1391f22a68c282654a471f611237d9f&rId=${details_id}`)


    const { image_url, publisher, publisher_url, source_url, title, ingredients } = detailRecipe;

    useEffect(() => { // component did mount
        async function fetchData() {
            try {
                const data = await fetch(url2);
                const jsonData = await data.json();
                setDetailRecipe(jsonData.recipe); //jsonData.recipe here =(format)= tempDetails data
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);


    // () => props.handleIndex(1)

    return (
        <React.Fragment>
            <div className="container detail_container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <button
                            type="button"
                            className="btn btn-warning mb-5 text-capitalize"
                            onClick={() => handleIndex(1)}
                        >back to recipe list
                        </button>
                        <img src={image_url} className="d-block w-100" alt="recipe" />
                    </div>
                    {/*Details*/}
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h4 className="text-uppercase">{title}</h4>
                        <h6 className="text-secondary text-capitalize text-slanted">
                            provided by {publisher}</h6>
                        <a href={publisher_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2 text-capitalize">publisher webpage
                        </a>
                        <a href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mt-2 mx-3 text-capitalize">recipe url
                        </a>
                        <hr/>
                        <ul className="list-group mt-4">
                        
                            <h2 className="mt-3 mb-4">Ingredients</h2>
                            
                            {ingredients.map((item, index) => {
                                return (
                                    <li className="list-group-item text-slanted" key={index}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RecipeDetails;