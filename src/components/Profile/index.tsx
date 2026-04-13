import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.ts";

const Profile = () => {

    const { logout } = useContext(AuthContext)!;

    const handleClickLogout = () => {
        //TODO log out logic
        logout();
        alert("Log out successful");
    }

    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}> Log out</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;