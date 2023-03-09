import { Navigate } from "react-router-dom";
import UnAuthorized from "../../pages/unAuthorized/UnAuthorized";

const ProtectedRoute = ({ isAllowed, children, redirectedUrl = "login" }) => {
    if (isAllowed) {
        return children;
    }
    return <Navigate to={redirectedUrl} replace />;
    // return <UnAuthorized to={redirectedUrl} replace />;
};
export default ProtectedRoute;
