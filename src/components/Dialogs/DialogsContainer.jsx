import { connect } from "react-redux"
import { addMessage, sendNewMessage } from "../../redux/message-reducer"
import Dialogs from "./Dialogs"
import withLoginRedirect from "../../HOCs/withLoginRedirect"
import { compose } from "redux"

let mapStoreToProps = (state) => {
  return {
    friends: state.messagePage.friends,
    messages: state.messagePage.messages,
  }
}

export default compose(connect(mapStoreToProps, { addMessage, sendNewMessage }), withLoginRedirect)(Dialogs)
