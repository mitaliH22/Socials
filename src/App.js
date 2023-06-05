import './App.css';
import Login from './Components/Login';
import { AuthProvider } from './firebase';

function App() {
  return (
    <AuthProvider>
        <Login />
    </AuthProvider>
  );
}

export default App;
