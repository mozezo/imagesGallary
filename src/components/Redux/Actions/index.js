import { IMAGES, CATEGORIES } from '../Constants/index';

const loadImages = () => ({
    type: IMAGES.LOAD
});

const getImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images
});

const getErrorImages = error => ({
    type: IMAGES.LOAD_FAIL,
    error
});

const loadCategories = () => ({
    type: CATEGORIES.LOAD
});

const getCategories = categories => ({
    type: CATEGORIES.LOAD_SUCCESS,
    categories
});

const getErrorCategories = error => ({
    type: CATEGORIES.LOAD_FAIL,
    error
});

export { loadImages , getImages, getErrorImages, loadCategories, getCategories, getErrorCategories };