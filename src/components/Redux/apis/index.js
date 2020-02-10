import axios from "axios";


const fetchImages = async (page , categoryId) => {
    const response = await axios.get(`http://localhost:3004/images?categoryId=${1}&_page=${1}&_limit=9`)
    console.log('response fetchImages', response)
    if (response.status >= 400) {
        throw new Error(response.errors);
    }
    return response.data;
};

const fetchCategories = async (page) => {
    const response = await axios.get(`http://localhost:3004/categories?_page=${page}`)
    if (response.status >= 400) {
        throw new Error(response.errors);
    }
    return response.data;
};

export { fetchImages , fetchCategories};