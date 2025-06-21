import { AuthProvider, useAuth } from '../../login-form/src/AuthContext';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import './App.css'

function AppContent() {
  const { user } = useAuth();
  return user ? <Dashboard /> : <LoginForm />
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
} 
