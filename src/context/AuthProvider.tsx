import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext"; // Импортируем из файла выше

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const login_context = (newToken: string) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, login_context, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;