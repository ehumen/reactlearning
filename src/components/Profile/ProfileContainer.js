import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfilePage } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withRouter from "../../redux/withRouterWrapper";
import { getProfile } from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 28783
        }
        getProfile(userId).then((response) => {
            this.props.setProfilePage(response)
        })
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


let ComponentWithUrlPath = withRouter(ProfileContainer);


export default connect(mapStateToProps, { setProfilePage })(ComponentWithUrlPath);
