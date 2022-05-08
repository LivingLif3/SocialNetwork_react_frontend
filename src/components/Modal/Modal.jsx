import React, {useState} from "react";
import { connect } from "react-redux";
import { createDialog } from "../store-redux/dialogs-reducer";
import "./Modal.css";

const Modal = ({ active, setActive, createDialog }) => {

    let [value, setValue] = useState('');
    let [text, setText] = useState('');

    let onSend = () => {
        createDialog(value, text);
        setActive(false);
        setValue("");
        setText("");
    }

    return (
        <div className={active ? "modal modal__active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p className="title">Создать диалог</p>
                <input type="text" className="input"
                    value={value} onChange={e => setValue(e.target.value)}
                    placeholder="Введите имя или email пользователя" />
                <input type="text" className="input"
                    value={text} onChange={e => setText(e.target.value)}
                    placeholder="Введите сообщение, с которого хотите начать диалог" />
                <div className="button__container">
                    <div className="button" onClick={onSend}>
                        Найти
                    </div>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {createDialog})(Modal);