import React, {useContext} from 'react';
import {RecipesContext} from '../context/RecipesContext';
import Button from './reusebleComponents/Button';
 
const Search= () =>{
    const {Search, setSearch, getRecipes} = useContext(RecipesContext);

    return(
        <form onSubmit= {getRecipes} >
            <div className = 'formContainer' >
                <input 
                type = 'text'
                required
                value= {Search}
                onChange={(e) => setSearch(e.target.value)} />
                <label>Recipes / Items</label>
            </div>
            <Button btnText='Search' />
        </form>
    )
}

export default Search;