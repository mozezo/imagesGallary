import { CATEGORIES } from '../Constants';

const initialState = {
    isLoading: false,
    categories: [],
    error: null
};

const CategoryReducer = (state = initialState , action) => {

    switch(action.type){
        case CATEGORIES.LOAD:
            return {...state , isLoading: true };
        case CATEGORIES.LOAD_SUCCESS:
            return {...state, categories: action.categories, isLoading: false};
        case CATEGORIES.LOAD_FAIL:
            return {...state, error: action.error, isLoading: false}
        default:
            return state;
    }
}

export default CategoryReducer;