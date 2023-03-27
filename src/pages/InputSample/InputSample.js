import React, { useRef, useState } from 'react';

const InputSample = () => {
    const userInfo = {
        username: '',
        password: ''
    }

    //useState(초기값) / setUserInput(변수의 값을 바꿈.setter)
    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUserInfoText] = useState(userInfo);

    const { username, password } = userInfoText; //초기화

    const passwordRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserInput({...userInput, [name]: value});
    }

    const nextFocus = (e) => {
        if(e.keyCode === 13){
            passwordRef.current.focus();
        }
    }

    const submitHandler = (e) => {
        if(e.keyCode === 13) {
            setUserInfoText({...userInput});
        }
    }

    // const clickToButton = () => {
    //     setUserInfoText({...userInput})
    // } 

    return (
        <div>
            <input 
                type='text' 
                onChange={handlerChange}//중괄호: 변수가 들어감 , 중괄호 속 따옴표: 값이 변수에 담겨 들어오지 않고 깡으로 들어올때 사용.
                onKeyUp={nextFocus}
                name='username' 
            />
            <input 
                type='text' 
                onChange={handlerChange}
                onKeyUp={submitHandler}
                name='password' 
                ref={passwordRef}
            />
            {/* <button type='button' onClick={clickToButton}>추가</button> */}
            <div>username: {username}</div>
            <div>password: {password}</div>
        </div>
    );
};

export default InputSample;