import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let onMessageTextChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div className={s.messages}>
          {messagesElements}
          <textarea
            ref={newMessageElement}
            rows={3}
            value={props.state.newMessageText}
            onChange={onMessageTextChange}
          ></textarea>
          <button className={s.buttonSend} onClick={addMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
