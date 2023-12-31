import { Route, Routes, useLocation, Navigate, BrowserRouter } from 'react-router-dom';

import './App.css';
import { AuthProvider, useAuth } from './utils/context';
import Wrapper from './components/Wrapper';
import Login from './screens/Login';
import States from './screens/States';
import Home from './screens/Home';
import Register from './screens/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Wrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/states"
              element={
                <RequireAuth>
                  <States />
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
