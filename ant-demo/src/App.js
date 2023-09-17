import { Route, Routes, useLocation, Navigate, BrowserRouter } from 'react-router-dom';

import './App.css';
import { AuthProvider, useAuth } from './utils/context';
import Wrapper from './components/Wrapper';
import Login from './screens/Login';
import Users from './screens/Users';
import Home from './screens/Home';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Wrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children;
}

export default App;
