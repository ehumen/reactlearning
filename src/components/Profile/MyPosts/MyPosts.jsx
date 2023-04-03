import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post id={p.id} message={p.message} likeCounter={p.likeCounter} />
  ));

  let newPostElement = React.createRef();

  let postChange = () => {
    let text = newPostElement.current.value;
    props.postChange(text);
  };
  let addPost = () => {
    props.addPost();
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={postChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
