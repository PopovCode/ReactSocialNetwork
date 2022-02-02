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

  let dialogsData = [
    {id:1, name:'Anton'},
    {id:2, name:'Miha'},
    {id:3, name: 'Solomaha'}
  ]

  let messageData = [
    {id:1, message:'Hi'},
    {id:2, message:'Hi how i you PopovCode'},
    {id:3, message: 'Yo'},
    {id:4, message: 'Yo'},
    {id:5, message: 'Yo'},
  ]

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>

        <div className={s.messages}>
          <Message message={messageData[0].message}/>
          <Message message={messageData[1].message}/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
