import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.ts";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { login_context } = useContext(AuthContext)!;

    const handleClickSignIn = () => {
        //TODO sign in logic
        const fakeToken = "qwerty12345";
        login_context(fakeToken);
        alert("Sign in successful");
    }

    const handleClickClear=()=>{
        setLogin('');
        setPassword('');
    }

    return (
        <>
            <label>
                Login:
                <input
                    type="text"
                    value={login}
                    onChange={(e) => {setLogin(e.target.value)}}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </label>
            <button onClick={handleClickSignIn}> Sign In</button>
            <button onClick={handleClickClear}> Clear</button>
        </>
    );
};

export default SignIn;