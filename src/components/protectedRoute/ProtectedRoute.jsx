import UnAuthorized from "../../pages/unAuthorized/UnAuthorized";
import { useUserState } from "../../contextApi/contextApi";

const ProtectedRoute = ({ children }) => {
    const [userState, userDispatch] = useUserState();

    if (!userState.user) {
        return <UnAuthorized to="/" replace />;
        // return <Navigate to="/" replace />;
    }

    return children;
};
export default ProtectedRoute;
