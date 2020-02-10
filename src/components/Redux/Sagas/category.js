import { put, call, takeEvery, select } from 'redux-saga/effects';

import { getCategories, getErrorCategories } from '../Actions';
import { CATEGORIES } from '../Constants';
import { fetchCategories } from '../apis';


export function* handleCategoriesLoad() {
    try {
        const categories = yield call(fetchCategories);
        yield put(getCategories(categories));
    } catch (error) {
        yield put(getErrorCategories(error.toString()));
    }
}

export default function* watchCategoriesLoad() {
    yield takeEvery(CATEGORIES.LOAD, handleCategoriesLoad);
}