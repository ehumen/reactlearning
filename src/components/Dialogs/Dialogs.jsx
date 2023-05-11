import React from "react"
import Dialog from "./DialogItem/DialogItem"
import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import { redirect } from "react-router-dom"
import NewMessage from "./Message/NewMessage"

const Dialogs = (props) => {
  let dialogsElements = props.friends.map((d) => <Dialog avatar={d.avatar} name={d.name} id={d.id} />)

  let messageElements = props.messages.map((m) => <Message id={m.id} message={m.message} />)

  //-----------redirect to login page---------------------------------
  // const redirectToLogin = () => {
  //   return redirect("/login")
  // }
  // if (!props.isAuth) {
  //   return redirectToLogin()
  // }
  //------------------------------------------------------------------
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messageElements}</div>
      <NewMessage sendNewMessage={props.sendNewMessage} />
    </div>
  )
}

export default Dialogs
