import React, { useState, useEffect } from 'react';
import { loadImages } from '../Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { Pagination } from 'antd';
import 'antd/dist/antd.css'


const ImageGallary = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const categoryImages = useSelector(state => state.categoryImages);
    //const isLoading = useSelector(state => state.isLoading);
    //const error = useSelector(state => state.error);
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSearchResults = () => {
        console.log('searchResults', searchResults)
      const results =  categoryImages.images.filter(img => 
           img.name.toLowerCase().includes(searchTerm) );

        console.log('results', results)
      setSearchResults(results);
    }

    const handleSearchClear = () => {
      setSearchResults([]);
      setSearchTerm('');
    }

    useEffect(() => {
        dispatch(loadImages())
    }, []);

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      }
    const { images, isLoading, error } = categoryImages
    const imagesOrSearchResults = searchResults.length > 0 ? searchResults : images
    //const imagesgrid = JSON.parse(JSON.stringify(images));
    return (

        <>
            <PhotoWrapper>
                <FilterContainer>
                    <FilterForm>
                        <FilterActions>
                            <ClearAction onClick={handleSearchClear}>Clear</ClearAction>
                            <FilterAction onClick={handleSearchResults}>Apply</FilterAction>
                        </FilterActions>
                        <Search >
                            <SearchInput  placeholder="Search" 
                                          value={searchTerm}
                                          onChange={handleSearchChange} />
                        </Search>
                    </FilterForm>
                </FilterContainer>
                <PhotosContainer>
                    {isLoading ? 'loading Images...' : ''}
                    {!isLoading && error === null ?  imagesOrSearchResults.map((image) => 
                        <ImageContainer>
                            <Image
                                src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/395/src/medium-24871eacb03d4d88afb0bf41ccb975dc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200210%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200210T193701Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=676e49f2338e31c95b6e1de971b8f8499f0fe660b057a43c23c742cc3d2b9d2a"
                                alt={image.name}
                            />
                            <ImageName>{image.name}</ImageName>
                        </ImageContainer>
                    ) : ''
                    }
                     
                </PhotosContainer>
            </PhotoWrapper>
            <PaginationContainer>
                <Pagination total={500} itemRender={itemRender} />
            </PaginationContainer>
        </>
    );
}


export default ImageGallary;

const PhotoWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 250px auto 0;

    @media (max-width: 767px){
        flex-direction: column;
    }
    
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    position: relative;
    box-sizing: border-box;
    margin-right: 25px;
    @media (max-width: 767px){
        width: 100%;
    }
`;

const FilterForm = styled.div`
    margin-top: 15px;
    padding-left: 6px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        padding: 0px;
        flex-wrap: wrap;
        margin-left: 10px;
}
`;

const FilterActions = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const ClearAction = styled.button`
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
    padding-right: 10px;
    padding-left: 10px;
    height: 21px;
`;

const FilterAction = styled.button`
    vertical-align: middle;
    padding: 0;
    border: solid 1px #000;
    width: 55px;
    height: 21px;
    margin-left: 3px;
    font-size: 12px;
    text-align: center;
    background-color: #000;
    color: #fff;
`;

const Search = styled.div`
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const SearchInput = styled.input`
    width: 100%;
    border: 1px solid black;
    padding: 5px;
`;

const PhotosContainer = styled.div`
    width: 70%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;

    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    margin: 0 auto;
    position: relative;
`;
const Image = styled.img`
    max-width: 100%;
    height: 230px;
    margin: 0 auto;
    position: relative;
    object-fit: contain;
    background-size: cover !important;
    background-position: center !important;
    cursor: pointer;
`;

const ImageName = styled.h3`
    color: #000;
    font-size: 17.3px;
    line-height: 1.67;
    font-weight: bold;
    margin: 10px 0 15px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    height: 50px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const PaginationContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

