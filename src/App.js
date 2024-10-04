// src/App.js
import React, { useState, useEffect } from 'react';
import EmployeeManager from './Components/EmployeeManager';
import Login from './Components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(savedLoginStatus === 'true');
  }, []);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="relative p-8"> 
          <button onClick={() => { localStorage.removeItem('isLoggedIn'); setIsLoggedIn(false); }} className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
            Logout
          </button>
          <EmployeeManager />
        </div>
      )}
    </div>
  );
}

export default App;
