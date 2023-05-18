import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './Home';
import Login from './Login';
import './App.css';


function App() {
  return (
    <>
    <Router>
      <div className="App">
        {/* Header Component */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer 
      position="top-center"
      theme="dark"
    />
    </>
  );
}

export default App;
