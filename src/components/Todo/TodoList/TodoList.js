/** @jsxImportSource @emotion/react */
import TodoListButton from './TodoListButton/TodoListButton';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';
import React from 'react';
import * as S from './style'

const TodoList = ({ todo, openModal, onRemove }) => {
    return (
        <div css={S.TodoList} key={todo.id}>
            <div css={S.TodoContent}>{todo.content}</div>
            <div css={S.ItemGroup}>
                <TodoListButton onClick={() => openModal(todo.id)}><BiPen/></TodoListButton>
                <TodoListButton onClick={() => onRemove(todo.id)}><TiTrash/></TodoListButton>
            </div>
        </div>
    );
};

export default TodoList;