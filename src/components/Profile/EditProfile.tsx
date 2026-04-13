import {useState} from "react";

interface Props {
    close: () => void;
}

const EditProfile = ({close}: Props) => {

    const handleClickSave = () => {
        //TODO Implement edit profile save and close logic
        alert("Edit profile successful");
        close();
    }
    const handleClickClear=()=>{
        setFirstName('');
        setLastName('');
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    return (
        <>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {setFirstName(e.target.value)}}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value)}}
                />
            </label>
            <button onClick={handleClickSave}> Save and close</button>
            <button onClick={close}> Close without saving</button>
            <button onClick={handleClickClear}> Clear</button>
        </>
    );
};


export default EditProfile;