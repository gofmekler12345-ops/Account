import { createContext } from "react";

export interface AuthContextType {
    token: string | null;
    login_context: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
