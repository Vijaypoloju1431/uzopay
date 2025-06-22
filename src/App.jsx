import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from "./components/AuthModel"
import { useAuth } from './context/AuthContext'; 

function App() {
  const { showModal, setShowModal, authMode } = useAuth();

  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='shadow-custom-box-shadow'>
        <NavBar />
      </div>

      {/* Main content */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* sign/login Modal */}
      {showModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
