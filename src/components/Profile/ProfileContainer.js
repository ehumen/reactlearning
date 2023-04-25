import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, setProfilePage } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withParams from "../../redux/HOCs";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 28783
        }
        this.props.getProfile(userId);
    }
    render() {
        return (
            !this.props.profile ? <Preloader /> : < Profile profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let ProfileContainerWithParams = withParams(ProfileContainer);

export default connect(mapStateToProps, { setProfilePage, getProfile })(ProfileContainerWithParams);

