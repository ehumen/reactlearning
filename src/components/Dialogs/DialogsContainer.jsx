import { connect } from "react-redux";
import { addMessage, updateNewMessageText } from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

let mapStoreToProps = (state) => {
  return {
    friends: state.messagePage.friends,
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText,
  };
};

const DialogsContainer = connect(mapStoreToProps, {
  addMessage,
  updateNewMessageText,
})(Dialogs);

export default DialogsContainer;
