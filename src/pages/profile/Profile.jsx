import React, { useEffect } from "react";

function Profile() {
    useEffect(() => {
        console.log("PROFILE");
    }, []);
    return <div>Profile</div>;
}

export default Profile;
