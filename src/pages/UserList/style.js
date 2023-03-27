import { css } from "@emotion/react";

export const Container = css`
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    width: 900px;
`;
export const Table = css`
margin-top: 20px;
    border: 1px solid #dbdbdb;
    width: 600px;
`;
export const ThAndTd = css`
    border: 1px solid #dbdbdb;
    width: 100px;
    height: 40px;
    text-align: center;
`;

export const Input = css`
    width: 60px;
    transition: width 0.5s ease;
    &:focus, :hover {
        width: 100px;
    }
`;