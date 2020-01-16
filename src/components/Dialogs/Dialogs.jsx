import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    );
};
const Message = (props) => {
    return <div className={s.dialog}>{props.message}
    </div>
}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 0, name: 'Zakhar'},
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Tonia'},
        {id: 3, name: 'Nika'},
        {id: 4, name: 'Tomara'},



    ];
    let messageData = [
        {id: 0, message: 'Hi!'},
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Hey, buddy, what\'s up?!'},
        {id: 4, message: 'What do you do?'},


    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>


            </div>



            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>



            </div>
        </div>


    )


}


export default Dialogs;