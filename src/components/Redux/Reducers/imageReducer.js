import { IMAGES } from '../Constants';

const initialState = {
    images: []
}

const imageReducer = (state = initialState , action) => {
    if(action.type === IMAGES.LOAD_SUCCESS) {
        return { ...state, images: action.images};
    }

    return state;
}

export default imageReducer;