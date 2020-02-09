import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import imageReducer from './imageReducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    imgs: imageReducer,
    error: errorReducer
});

export default rootReducer;