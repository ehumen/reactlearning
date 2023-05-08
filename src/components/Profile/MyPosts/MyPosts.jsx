import React from "react"
import Post from "./Post/Post"
import NewPost from "./NewPost"

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => <Post key={p.id} message={p.message} likeCounter={p.likeCounter} />)

  return (
    <div>
      <h3>My posts</h3>
      <NewPost addNewPost={props.addNewPost} />
      {postsElements}
    </div>
  )
}

export default MyPosts
