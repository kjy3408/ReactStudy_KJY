import { css } from "@emotion/react";

export const Container = css`
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px;
    width: 900px;
`;
 
export const AddInput = css`
    width: 550px;
    height: 40px;
    font-size: 16px;
`;

export const AddButton = css`
    height: 45px;
`;

export const TodoMain = css`
    overflow: hidden;
    overflow-y: scroll;
    border: 1px solid #dbdbdb;
    width: 600px;
    height: 600px;
    margin-top: 20px;
`;

export const AddTodo = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #dbdbdb;
    width: 600px;
    height: 50px;
    margin-bottom: 10px;
    background-color: #c9c9c9;
`;

export const DeleteButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 30px;
`;

export const realTodo = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 550px;

    margin-left: 20px;
    margin-right: 10px;
`;
