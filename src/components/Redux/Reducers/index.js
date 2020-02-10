import imageReducer from './image';

import CategoryReducer from './category'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    categoryImages: imageReducer,
    categories: CategoryReducer,
});

export default rootReducer;