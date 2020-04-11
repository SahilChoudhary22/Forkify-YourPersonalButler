import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader} from './views/base';

/** Global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};
/** SEARCH CONTROLLER */
const controlSearch = async () => {
    // 1) Get query from the view
    const query = searchView.getInput()
    //const query = 'pizza' //TESTING
    console.log(query)

    if (query){
        // 2) new search obj and add it to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRees);
        try {
            
            await state.search.getResults();

        // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch(error) {
            alert('Something wrong with the search...');
            clearLoader();
        }
        // 4) Search for recipes
        
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


//TESTING
// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlSearch();
// });



elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        // clear prev results
        searchView.clearResults();
        // render results of next page
        searchView.renderResults(state.search.result, goToPage);
        
    }

});


/** RECIPE CONTROLLER */
const controlRecipe = async () => {
    // get ID from URL
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) {
            searchView.highlightSelected(id);
        }

        // Create new recipe object
        state.recipe = new Recipe(id);

        // TESTING
        //window.r = state.recipe;

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

        // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

        // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch (err) {
            alert("Error processing recipe!");
        }
        // Get recipe data
        
    }
     
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));