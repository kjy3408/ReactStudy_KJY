/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import ModalButton from '../ModalButton/ModalButton';
import * as S from './style'

const PromptModal = (props) => {
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState('');
    //useEffect => 컴포넌트가 나타났을때, 사라졌을때(랜더링 됐을때 - mount/unmount)
    useEffect(
        () => {             //컴포넌트가 나타나는 시점
            setModalContent(props.todo.content);

            const handler = (e) => {
                if(!modalRef.current.contains(e.target)){
                    props.setIsOpen(false);
                }
            }
            document.addEventListener('mousedown', handler) //mousedown - 클릭
            return () => {  //컴포넌트가 사라지는 시점이 return
                document.removeEventListener('mousedown', handler) //eventListner를 닫힐때 없애줘야 객체가 계속해서 쌓이는걸 방지
            }
        },[props]
    );

    

    const closeModal = () => {
        props.setIsOpen(false);
    }

    const contentChange = (e) => {
        setModalContent(e.target.value);
    }

    const onSubmitKeyUp = (e) => {
        if(e.keyEnter){ //e.keyCode === 13
            onSubmit();
        }
    }

    const onSubmit = () => {
        props.updateTodo({
            id: props.todo.id,
            content: modalContent
        });
        closeModal();
    }

    return(
        <div css={S.modalContainer}>
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>
                    <h1 css={S.modalTitle}>{props.title}내용 수정</h1>
                </header>
                <main css={S.modalMain}>
                    <input css={S.modalInput} type="text" onChange={contentChange} onKeyUp={onSubmitKeyUp} defaultValue={props.todo.content} />
                </main>
                <footer css={S.modalFooter}>
                    <ModalButton buttonCount={2} onClick={onSubmit}>확인</ModalButton>
                    <ModalButton buttonCount={2} onClick={closeModal}>취소</ModalButton>
                </footer>
            </div>
        </div>
    );
}

export default PromptModal;