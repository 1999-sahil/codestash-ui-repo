import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './context/theme-context';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import AdminAuth from './pages/admin-auth';
import HomePage from './pages/home-page';

function App() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${darkTheme ? "dark" : " "} h-screen w-full`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-auth" element={<AdminAuth />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  )
}

export default App
