import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withLoginRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={"/login"} />
        }
        return <Component {...props} />
    }
    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent;
}


export default withLoginRedirect;