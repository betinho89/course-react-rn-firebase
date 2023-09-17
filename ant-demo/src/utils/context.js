import {
  useContext,
  createContext,
  useState
} from 'react';
import { logoutAuth } from '../services/Firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (data) => {
    console.log('Login data: ', data);
    setUser(data.user);
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
