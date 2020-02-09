import { IMAGES } from '../Constants/index';

const loadImages = () => ({
    type: IMAGES.LOAD
});

const getImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images
});

const getError = error => ({
    type: IMAGES.LOAD_FAIL,
    error
});

export { loadImages , getImages, getError };