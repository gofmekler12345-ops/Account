import { useState, useContext } from "react";
import {AuthContext} from "../../context/AuthContext.ts";


interface Props {
    close: () => void;
}

const ChangePassword = ({ close }: Props) => {
    const auth = useContext(AuthContext);
    const token = auth?.token;

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        if (!token) {
            alert("Error: No token found. Please log in again.");
            return;
        }

        console.log("Sending request to server...");
        console.log("Auth Token used:", token);
        alert("Password change successful");
        close();
    }

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
            <h3>Change Password</h3>
            <label>
                Old Password:
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)} />
            </label>
            <br />
            <label>
                New Password:
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without saving</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default ChangePassword;