import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, setProfilePage, updateStatus } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withParams from "../../HOCs/withParams";
import withLoginRedirect from "../../HOCs/withLoginRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 28783
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
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
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    withParams,
    withLoginRedirect,
    connect(mapStateToProps, { setProfilePage, getProfile, getStatus, updateStatus }),
)(ProfileContainer);
