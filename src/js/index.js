import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/** Global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from the view
    const query = searchView.getInput() //TODO
    console.log(query)

    if (query){
        // 2) new search obj and add it to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        searchView.renderResults(state.search.result);
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});





