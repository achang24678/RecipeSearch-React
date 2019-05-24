import React, { useState, useEffect } from 'react';
import './App.css';
import { recipesTemp } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

export const UserContext = React.createContext();

const App = () => {
  const [recipes, setRecipes] = useState(recipesTemp);
  const [url, setUrl] = useState('https://www.food2fork.com/api/search?key=f1391f22a68c282654a471f611237d9f');
  const [details_id, setDetailsId] = useState(35389); //recipe id
  const [pageIndex, setPageIndex] = useState(1);
  const [search, setSearch] = useState('');
  const query = '&q=';
  const base_url = 'https://www.food2fork.com/api/search?key=f1391f22a68c282654a471f611237d9f';
  const [err, setErr] = useState('');

  const getRecipes = async () => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0){
        setErr('sorry, search did not return any results');
      } else {
        setErr('');
      }
      setRecipes(jsonData.recipes);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { // component did mount
    getRecipes();
  }, []);

  const displayPage = (index) => { // page change manipulation
    switch (index) {
      case 1:
        return (
          <RecipeList handleDetails={handleDetails} handleChange={handleChange} handleSubmit={handleSubmit} />
        ) //pass down function for child comp
      case 0:
        return (<RecipeDetails handleIndex={handleIndex} />) //pass down function for child comp
      default:

    }
  };
  // function that handle (show detail or main page)---------------------
  const handleIndex = (index) => {
    setPageIndex(index);
  };
  const handleDetails = (index, id) => {
    setPageIndex(index);
    setDetailsId(id);
  };
  // function that handle (show detail or main page)----------------------


  // function that handle search input and form submit--------------------

  useEffect(() => { //whenever url changes, we get the new recipes list, this is eqaul to attach callback function to setState
    getRecipes();
  }, [url]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    const url5 = `${base_url}${query}${search}`
    e.preventDefault();
    setUrl(url5);

  }


  // function that handle search input and form submit--------------------

  return (
    <UserContext.Provider value={{ recipes, details_id, search, err }}>
      <React.Fragment>
        {displayPage(pageIndex)}

      </React.Fragment>
    </UserContext.Provider>
  )
};

export default App;
