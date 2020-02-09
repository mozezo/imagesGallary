import { all } from 'redux-saga/effects';

import imagesSaga from './imageSaga';

export default function* rootSaga() {
    yield all([imagesSaga()]);
}