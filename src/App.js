import React from 'react';
import Navbar from "./components/navbar/navbar";
import ImageGallary from "./components/ImageGallary/ImageGallary"
import Categories from "./components/ImageGallary/categories"
import configureStore from './components/Redux/store';
import {Provider} from 'react-redux';

const store = configureStore();


function App() {
  return (
    <Provider store={store}>
    <Navbar />
    <ImageGallary />
    {/* <Categories /> */}
    </Provider>
  );
}

export default App;
