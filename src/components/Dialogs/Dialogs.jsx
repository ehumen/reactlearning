import React from "react";
import Dialog from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messageBox = React.createRef();

  let dialogsElements = props.friends.map((d) => (
    <Dialog avatar={d.avatar} name={d.name} id={d.id} />
  ));

  let messageElements = props.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  const changeMessageText = () => {
    let text = messageBox.current.value;
    props.updateNewMessageText(text);
  };
  const addMessage = () => props.addMessage();

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messageElements}</div>
      <div className={classes.sendbox}>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={changeMessageText}
            ref={messageBox}
            value={props.newMessageText}
          />
        </div>

        <div>
          <button className={classes.sendButton} onClick={addMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
