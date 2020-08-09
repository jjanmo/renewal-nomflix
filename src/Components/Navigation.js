import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: rgba(10, 20, 29, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    @media (max-width: 1280px) {
        width: 70px;
    }
`;

const InnerBox = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 50%;
    border-radius: 5px;
    background-color: #3f7293;
    overflow: hidden;
`;

const Item = styled.li`
    list-style: none;
    width: 100%;
    &:not(:first-child) {
        border-left: 1px solid rgba(0, 0, 0, 0.25);
    }
    &:not(:last-child) {
        border-right: 1px solid rgba(0, 0, 0, 0.25);
    }
    &:hover:not(:last-child) {
        background-color: #dce5ec;
    }
    &:first-child {
        grid-column: 1;
    }
    &:nth-child(2) {
        grid-column: 2;
    }
    &:nth-child(3) {
        grid-column: 3;
    }
    &:last-child {
        grid-column: 4/6;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

const SLink = styled(Link)`
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    color: white;
    &:hover {
        color: #212121;
    }
    @media (max-width: 1280px) {
        font-size: 1.2rem;
    }
`;

const SearchInput = styled.input`
    width: 60%;
    height: 90%;
    background-color: #316282;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-decoration: none;
    outline: none;
    margin-right: 1rem;
`;

const SearchIcon = styled.span``;

function Navigation() {
    return (
        <Header>
            <InnerBox>
                <Item>
                    <SLink to="/">Home</SLink>
                </Item>
                <Item>
                    <SLink to="/movie">Movie</SLink>
                </Item>
                <Item>
                    <SLink to="/tv">TV</SLink>
                </Item>
                <Item>
                    <SearchInput />
                </Item>
            </InnerBox>
        </Header>
    );
}

export default Navigation;
