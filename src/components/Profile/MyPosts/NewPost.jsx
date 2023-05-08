import React from "react"
import { Field, Form } from "react-final-form"

const NewPost = (props) => {
  const onSubmit = async (values) => {
    props.addNewPost(values.newpost)
    window.alert(JSON.stringify(values, 0, 2))
  }
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="newpost" placeholder="Write something!">
            {({ input, placeholder }) => (
              <div>
                <div>
                  <label> New Post</label>
                </div>
                <input {...input} placeholder={placeholder} />
              </div>
            )}
          </Field>
          <button name="post">Post</button>
        </form>
      )}
    />
  )
}

export default NewPost
