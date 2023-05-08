import { connect } from "react-redux"
import { addNewPost, addPost } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, addNewPost })(MyPosts)

export default MyPostsContainer
