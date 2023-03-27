import React, { useRef, useState } from 'react';

const InputSample2 = () => {
    const userInfo = {
        username: '',
        password: ''
    }

    const [user, setUser] = useState(userInfo);
    const [inputText, setInputText] = useState(userInfo);

    const { username, password } = inputText;

    const passwordRef = useRef();

    const userInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name] : value })
    }

    const inputKeyUp = (e) => {
        if(e.keyCode === 13){
            passwordRef.current.focus();
        }
    }

    const clickToButton = () => {
        setInputText({ ...user });
    } 


    return (
        <div>
            <input type="text" onChange={userInput} onKeyUp={inputKeyUp} name="username"/>
            <input type="text" onChange={userInput} name="password" ref={passwordRef}/>

            <button onClick={clickToButton}></button>
            <div>
                username:{username}
            </div>
            <div>
                password:{password}
            </div>

        </div>
    );
};

export default InputSample2;