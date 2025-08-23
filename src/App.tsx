import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import DaySelectionPage from './pages/DaySelectionPage';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/register" 
            element={
              <ProtectedRoute>
                <DaySelectionPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/register/:day" 
            element={
              <ProtectedRoute>
                <RegistrationPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;