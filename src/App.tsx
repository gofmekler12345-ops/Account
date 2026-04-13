import {Routes, Route, Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Guest from "./components/Guest";
import Profile from "./components/Profile";

function App() {
    const auth = useContext(AuthContext);

    return (
        <div className="app">
            <Routes>

                <Route
                    path="/"
                    element={
                        auth?.token ? <Navigate to="/profile" replace/> : <Guest/>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        auth?.token ? <Profile/> : <Navigate to="/" replace/>
                    }
                />

                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </div>
    );
}

export default App;