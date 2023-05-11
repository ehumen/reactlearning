import React from "react"
import { Field, Form } from "react-final-form"
import classes from "../Dialogs.module.css"

const NewMessage = (props) => {
  const onSubmit = async (values) => {
    values.newmessage && props.sendNewMessage(values.newmessage)
    values.newmessage = null
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.sendbox}>
          <Field name="newmessage" placeholder="Write something!" subscription={{ value: true, error: true }}>
            {({ input, placeholder }) => (
              <div>
                <input {...input} placeholder={placeholder} />
              </div>
            )}
          </Field>
          <button name="sendMessage" className={classes.sendButton}>
            Send
          </button>
        </form>
      )}
    />
  )
}

export default NewMessage
