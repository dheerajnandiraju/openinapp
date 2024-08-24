import './App.css';
import { useState, useRef, useEffect } from 'react';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState(false);


  const toggleTheme = () => {
    setTheme(!theme);
  };

if (theme) {
  document.body.className="lightmode";
}
if(!theme){
  document.body.className="darkmode"
}

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<SignIn theme={toggleTheme} onThemeChange={setTheme} />}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;