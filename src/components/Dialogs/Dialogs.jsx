import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  let newMessageBody = state.newMessageBody;

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div className={s.messages}>
          {messagesElements}
          <textarea
            rows={3}
            value={newMessageBody}
            onChange={onNewMessageChange}
          />
          <button className={s.buttonSend} onClick={onSendMessageClick}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
