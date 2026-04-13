import './App.css';

// import {Route, Routes} from "react-router";
import Guest from "./components/Guest";
import Profile from "./components/Profile";
import {AuthContext} from "./context/AuthContext.ts";
import {useContext} from "react";

function App() {
//TODO Implement token retrieval from global state logic
    const auth = useContext(AuthContext);


    return (
        <div className="app">
            {auth?.token ? <Profile/> : <Guest/>}
        </div>
    )
}

export default App

// <Routes>
// <Route path="/" element={<Guest/>} />
// <Route path="/profile" element={<Profile/>} />
// </Routes>