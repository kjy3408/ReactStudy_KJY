/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style'

const UserList = () => {
    useEffect(() => {
        //요소가 랜더링 되었을때
        console.log('컴포넌트 랜더링');
    }, []);

    const user = {
        id: 0,
        vlaue:'',
        password:'',
        name:'',
        email:'',
        modifyFlag: false
    }

    const userIndex = useRef(1);
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        console.log(inputs);
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13){
            let index = 0;
            switch (e.target.name) {
                case 'username': index = 1;
                break;
                case 'password':index = 2;
                break;
                case 'name':index = 3;
                break;
                default: addButtonRef.current.click();
            }
            if(index !== 0){
                inputRefs[index].current.focus();
            }
            
        }
    }
 
    const addhandler = () => {
        const user = {
            ...inputs
        };

        user.id = userIndex.current++;
        setUsers([...users, user]);
    }

    const onRemove = (index) => {
    //     users.splice(index - 1, 1);
    //     setUsers([...users]);
        setUsers(users.filter(user => user.id !== index));
    }
    // function Test2() {
    //     return(<h1>Test2</h1>);
    //   }

    
    const onModify = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                setInputs({...user});
                user.modifyFlag = true;
            }else {
                user.modifyFlag = false;
            }
            return user;
        }));
    }

    const onSave = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                return {
                    ...inputs
                    // id: user.id
                };
            }
            return user;
        }));
    }

    // const users = [
    //     {
    //         id: 1,
    //         username: 'aaa',
    //         password: '1234',
    //         name: 'AAA',
    //         email: 'aaa@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'bbb',
    //         password: '1234',
    //         name: 'BBB',
    //         email: 'bbb@gmail.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'ccc',
    //         password: '1234',
    //         name: 'CCC',
    //         email: 'ccc@gmail.com'
    //     }
    // ]

    return (
        <div css={S.Container}>
            <div>
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]}/>
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]}/>
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]}/>
                <input type="text" css={S.Input} onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]}/>
                <button type='button' onClick={addhandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>  
                    <tr>
                        <th css={S.ThAndTd}>index</th>
                        <th css={S.ThAndTd}>usename</th>
                        <th css={S.ThAndTd}>password</th>
                        <th css={S.ThAndTd}>name</th>
                        <th css={S.ThAndTd}>email</th>
                        <th css={S.ThAndTd}>update</th>
                        <th css={S.ThAndTd}>delete</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user => {
                        
                        return (
                            <tr key={user.id}>
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]} defaultValue={user.username} />) : user.username}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} defaultValue={user.password} />) : user.password}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={user.name} />) : user.name}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={user.email} />) : user.email}</td>
                                <td css={S.ThAndTd}>
                                    {user.modifyFlag 
                                        ? (<button onClick={() => onSave(user.id)}>확인</button>)
                                        : (<button onClick={() => onModify(user.id)}>수정</button>) 
                                    }
                                </td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;