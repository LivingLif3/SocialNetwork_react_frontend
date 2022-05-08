import React from "react";
import "./DialogsItem.css";

const DialogsItem = (props) => {
    return(
        <div className="dialogs__item">
            <div className="dialogs__item-avatar">
                <img src={"https://sun9-87.userapi.com/impg/NqGukhqDI95sE3I0MlUydo8VwoHQpn0FLhACuA/9noNsyd2XZs.jpg?size=1440x1920&quality=96&sign=6f3db6b937e82c62ab7a5062573e2ad3&type=album"} 
                className = {"avatar"} alt="" />
                {props.online && <div className="dialogs__item-online"></div>}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{props.partner.fullName}</b>
                    {/* <span>{getMessageTime()}</span> */}
                </div>
                <div className="dialogs__item-info-bottom">
                    {props.text ? props.text : ""}
                </div>
            </div>
        </div>
    )
}

export default DialogsItem;