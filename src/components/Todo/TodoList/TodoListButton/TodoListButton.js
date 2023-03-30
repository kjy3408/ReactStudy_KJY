/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const ItemButton = css`
    display: flex;
    align-items: center;
    border: none;
    height: 100%;
    color: #999;
    background-color: #ffffff00;
    cursor: pointer;
    &:hover{
        color: #121212;
    }
    font-size: 17px;
`;

const TodoListButton = ({ onClick, children }) => {
    
    return (
        <button css={ItemButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default TodoListButton;