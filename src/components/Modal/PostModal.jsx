import React, {useState} from "react";
import { connect } from "react-redux";
import { postCreate } from "../store-redux/post-reducer";
import "./Modal.css";

const Modal = ({ active, setActive, postCreate }) => {

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [cost, setCost] = useState('');

    let onSend = () => {
        postCreate(cost, title, description);
        setActive(false);
        setTitle("");
        setDescription("");
        setCost("");
    }

    return (
        <div className={active ? "modal modal__active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content_post" onClick={e => e.stopPropagation()}>
                <p className="title">Создать пост</p>
                <input type="text" className="input"
                    value={title} onChange={e => setTitle(e.target.value)}
                    placeholder="Введите загаловок документа..." />
                <input type="text" className="input"
                    value={description} onChange={e => setDescription(e.target.value)}
                    placeholder="Введите содержание поста..." />
                <input type="text" className="input"
                    value={cost} onChange={e => setCost(e.target.value)}
                    placeholder="Введите стоимость услуги(если она имеется)..." />
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

export default connect(mapStateToProps, {postCreate})(Modal);