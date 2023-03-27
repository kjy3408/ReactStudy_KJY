/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as S from './styleKJY'

const TodoList = () => {

const todoList  = {
    id: 0
}

const [text, setText] = useState('');

const [todoLists, setTodoList] = useState([]);
const [todoInput, setTodoInput] = useState(todoList);
const todoIndex = useRef(1);

const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(todoInput)
    setTodoInput({ ...todoInput, [name]: value });
    setText(value)
}

const addHandler = () => {
    
    const todoList = {
        ...todoInput
    };
    todoList.id = todoIndex.current++;
    setTodoList([...todoLists, todoList])
    console.log(todoList);
    setText('');

}

const removeHandler = (index) => {
    setTodoList(todoLists.filter(todoList => todoList.id !== index));
}


    return (
        <div css={S.Container}>
            <div>
                <input type="text" css={S.AddInput} onChange={inputHandler} placeholder='내용입력' name='todoList' value={text}/>
                <button type='button' css={S.AddButton} onClick={addHandler}>추가</button>
            </div>
            <div css={S.TodoMain}>
                {todoLists.map(todoList => {
                        return(
                            <div css={S.AddTodo} key={todoList.id}>
                                <div css={S.realTodo}>
                                    {todoList.todoList}
                                    <button type='button' css={S.DeleteButton} onClick={() => removeHandler(todoList.id)}>삭제</button>
                                </div>
                            </div>
                        );
                   })}
            </div>
        </div>
    );
};

export default TodoList;