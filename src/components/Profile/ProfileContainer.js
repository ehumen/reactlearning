import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfilePage } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { useLocation, useNavigate } from "react-router-dom";
import withRouter from "../../redux/withRouterWrapper";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 28783
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
            this.props.setProfilePage(response.data)
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
