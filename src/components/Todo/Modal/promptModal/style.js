import { css } from "@emotion/react";

export const modalContainer = css`
position: absolute;
top: 0px;
left: 0px;
z-index: 99;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

background-color: #000000aa;
`;

export const modalBox = css`
border-radius: 7px;
width: 350px;
height: 200px;
background-color: #fafafa;
overflow: hidden;
`;

export const modalHeader = css`
display: flex;
justify-content: center;
align-items: center;

border-bottom: 1px solid #dbdbdb;
height: 20%; //40px
`;

export const modalTitle = css`
font-size: 18px;
font-weight: 600;
`;

export const modalMain = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 60%;
`;

export const modalInput = css`
    outline: none;
    border: none;
    border-bottom: 2px solid green;

    width: 20%;
    height: 30px;
    box-shadow: 0px 0px 2px 1px white;
    background-color: #fafafa00;
    &:focus{
        width: 80%;
        transition: all 1s ease;
    }
    &:hover{
        width: 80%;
        transition: all 1s ease;
    }
`;

export const modalFooter = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
`;

