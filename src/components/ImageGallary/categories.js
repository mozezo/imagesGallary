import React, { useState, useEffect } from 'react';
import { loadCategories } from '../Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

const Categories = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadCategories())
    }, []);


    return (

        <>
        <VendorsSearch>
            <VendorsSearchInputs>
                <VendorsSearchDropdown>
                    <CategoriesPlaceholder>Find categories here</CategoriesPlaceholder>
                    <DropDownIcon />
                </VendorsSearchDropdown>
                <SeachForm>
                    <SearchInput placeholder="Search" />
                </SeachForm>

            </VendorsSearchInputs>
        </VendorsSearch>
        </>
    );
}


export default Categories;

const VendorsSearch = styled.div`
    width: 90%;
    max-width: 1070px;
    margin: 35px auto 10px;
    margin-top: 16%;
    @media (max-width: 887px) {
        margin-top: 20%;
    } 
    @media (max-width: 767px) {
        margin-top: 27%;
        width: 97%;
    } 
`;

const VendorsSearchInputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const VendorsSearchDropdown = styled.div`
    border: solid 2px #000;
    width: 49%;
    height: 43px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

const CategoriesPlaceholder = styled.h5`
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 4.1px;
    text-transform: uppercase;
    padding-top: 10px;

    @media (max-width: 767px) {
    font-size: 9px !important;
    letter-spacing: 1px !important;
    font-weight: normal;
    }
`;

const DropDownIcon = styled.div`
    border-right: solid 2px #000;
    border-bottom: solid 2px #000;
    height: 16px;
    width: 16px;
    transform: rotate(45deg);
    margin-left: 30px;
    margin-top: 6px;
    @media (max-width: 767px) {
      height: 7px !important;
      width: 7px !important;
      margin-top: 11px !important;
      margin-left: 4px;
    }
`;

const SeachForm = styled.div`
    height: 43px;
    width: 49%;
    position: relative;
`;

const SearchInput = styled.input`
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 6.1px;
    text-transform: uppercase;
    color: #024d4c;
    opacity: 1;
    width: 100%;
    height: 100%;
    border: solid 2px #000;
    text-align: center;
    padding: 0 15%;
    @media (max-width: 767px){
        font-size: 10px !important;
        letter-spacing: 1px !important;
    }`;

const VendorContainer = styled.div`
    position: relative;
    max-width: 1070px;
    padding: 0;
    width: 90%;
    max-width: 1070px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 768px) {
        width: 750px;
    }
`;

const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    margin: auto -5px;
    @media only screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
    
