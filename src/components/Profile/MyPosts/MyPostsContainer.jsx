import { connect } from "react-redux"
import { addNewPost, addPost, postChange } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, postChange, addNewPost })(MyPosts)

export default MyPostsContainer
