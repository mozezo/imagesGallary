import { IMAGES } from '../Constants';

const initialState = {
    isLoading: false,
    images: [],
    error: null
};

const imageReducer = (state = initialState , action) => {

    switch(action.type){
        case IMAGES.LOAD:
            return {...state , isLoading: true };
        case IMAGES.LOAD_SUCCESS:
            return {...state, images: action.images, isLoading: false};
        case IMAGES.LOAD_FAIL:
            return {...state, error: action.error, isLoading: false}
        default:
            return state;
        }
}

export default imageReducer;