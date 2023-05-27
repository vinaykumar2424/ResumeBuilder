import { useContext } from 'react';
import './App.css';
import AfterSelectionPage from './components/AfterSelection/AfterSelectionPage';
import Resumes from './components/Resumes';
// import Resume1 from './components/Resumes/Resume1';
import StartingPage from './components/StartingPage';
import Login from './components/loginRegister/Login';
import Register from './components/loginRegister/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './components/context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    } 
    return children;
}

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><StartingPage /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resumes" element={<Resumes />} />
          <Route path="afterselect" element={<AfterSelectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <Resumes /> */}
        {/* <StartingPage /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Resume1 /> */}
      {/* <AfterSelectionPage /> */}
      {/* <GeneratePDF /> */}
    </div>
  );
}

export default App;
