import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserAuthData } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData();
    };
    render() {
        return (< Header {...this.props} />);
    };
};

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { getUserAuthData })(HeaderContainer);
