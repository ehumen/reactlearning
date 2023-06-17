import React from "react"
import Post from "./Post/Post"
import NewPost from "./NewPost"

const MyPosts = ({postsData, addNewPost}) => {
    let postsElements = postsData.map((p) => <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)

    return (
        <div>
            <h3>My posts</h3>
            <NewPost addNewPost={addNewPost}/>
            {postsElements}
        </div>
    )
}

export default MyPosts
