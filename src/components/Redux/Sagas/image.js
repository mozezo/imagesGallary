import { put, call, takeEvery, select } from 'redux-saga/effects';

import { getImages, getErrorImages } from '../Actions';
import { IMAGES } from '../Constants';
import { fetchImages } from '../apis';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(getImages(images));
    } catch (error) {
        yield put(getErrorImages(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}