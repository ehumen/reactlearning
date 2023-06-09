import {connect} from "react-redux"
import {addMessage, sendNewMessage} from "../../redux/message-reducer"
import Dialogs from "./Dialogs"
import withLoginRedirect from "../../HOCs/withLoginRedirect"
import {compose} from "redux"

let mapStateToProps = (state) => {
    return {
        friends: state.messagePage.friends,
        messages: state.messagePage.messages,
    }
}

export default compose(connect(mapStateToProps, {addMessage, sendNewMessage}), withLoginRedirect)(Dialogs)
