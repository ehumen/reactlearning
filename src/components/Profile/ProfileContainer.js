import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getProfile, getStatus, setProfilePage, updateStatus, updateUserProfilePhoto} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import Profile from "./Profile";
import withLoginRedirect from "../../HOCs/withLoginRedirect";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {
   let {id} = useParams();
   const [userId, setUserId] = useState(props.authorizedUserId);

   if (id && (id !== userId)) {
      setUserId(id);
   }
   if (!id && userId !== props.authorizedUserId) {
      setUserId(props.authorizedUserId);
   }

   useEffect(() => {
      props.getProfile(userId);
      props.getStatus(userId);

   }, [userId])


   return (
      !props.profile ?
         <Preloader/> : < Profile
            userId={userId}
            isOwner={!id}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            updateUserProfilePhoto={props.updateUserProfilePhoto}/>
   )

}


const mapStateToProps = (state) => {
   return {
      authorizedUserId: state.auth.id,
      profile: state.profilePage.profile,
      status: state.profilePage.status,

   }
}
export default compose(
   // withParams,
   connect(mapStateToProps, {setProfilePage, getProfile, getStatus, updateStatus, updateUserProfilePhoto}),
   withLoginRedirect
)(ProfileContainer);
