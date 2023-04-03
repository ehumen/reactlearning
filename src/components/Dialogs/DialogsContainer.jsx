import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

let mapStoreToProps = (state) => {
  return {
    friends: state.messagePage.friends,
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      return dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStoreToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
