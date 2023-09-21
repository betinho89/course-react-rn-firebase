import {
  useContext,
  createContext,
  useState
} from 'react';
import { logoutAuth } from '../services/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ user }) => {
    setUser(user);
  }

  const logout = async () => {
    await logoutAuth();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
