import React from "react"
import Dialog from "./DialogItem/DialogItem"
import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import NewMessage from "./Message/NewMessage"

const Dialogs = ({friends, messages, sendNewMessage}) => {
    let dialogsElements = friends.map((d) => <Dialog avatar={d.avatar} name={d.name} id={d.id}/>)

    let messageElements = messages.map((m) => <Message id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messageElements}</div>
            <NewMessage sendNewMessage={sendNewMessage}/>
        </div>
    )
}

export default Dialogs
