import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withParams from "../../HOCs/withParams";
import { getProfile, getStatus, setProfilePage, updateStatus } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import Profile from "./Profile";
import withLoginRedirect from "../../HOCs/withLoginRedirect";

const ProfileContainer = (props) => {

    const [userId, setUserId] = useState(props.params.userId)

    useEffect(() => {
        if (!userId) {
            setUserId(props.authorizedUserId)
        } else {
            props.getProfile(userId);
            props.getStatus(userId);
        }
    }, [userId])


    return (
        !props.profile ?
            <Preloader /> : < Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    )

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
    withLoginRedirect
)(ProfileContainer);
