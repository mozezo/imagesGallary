import { all } from 'redux-saga/effects';

import imagesSaga from './image';
import categoriesSaga from './category';

export default function* rootSaga() {
    yield all([imagesSaga(), categoriesSaga()]);
}