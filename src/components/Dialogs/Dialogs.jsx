import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Miha'},
    {id: 3, name: 'Solomaha'},
    {id: 4, name: 'Kate'},

  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi how i you PopovCode'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = messages.map(m => <Message message={m.message}/>)

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
