import React from "react"
import { Field, Form } from "react-final-form"

const NewPost = (props) => {
  const onSubmit = async (values) => {
    values.newpost && props.addNewPost(values.newpost)
    values.newpost = null
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="newpost" placeholder="Write something!" subscription={{ value: true, error: true }}>
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
