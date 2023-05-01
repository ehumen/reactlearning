import { connect } from "react-redux"
import { addMessage, updateNewMessageText } from "../../redux/message-reducer"
import Dialogs from "./Dialogs"
import withLoginRedirect from "../../HOCs/withLoginRedirect"
import { compose } from "redux"

let mapStoreToProps = (state) => {
  return {
    friends: state.messagePage.friends,
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText,
  }
}

export default compose(connect(mapStoreToProps, { addMessage, updateNewMessageText }), withLoginRedirect)(Dialogs)
