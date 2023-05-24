import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, setProfilePage, updateStatus } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withParams from "../../HOCs/withParams";
import { compose } from "redux";
import { Navigate, useNavigate } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;

        } else {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        }
    }
    render() {
        return (
            !this.props.profile ?
                <Preloader /> : < Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authorizedUserId: state.auth.id,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    withParams,
    connect(mapStateToProps, { setProfilePage, getProfile, getStatus, updateStatus }),
)(ProfileContainer);
