import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import './sass/main.sass';
import AppRouter from './components/AppRouter'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      setLoading
    }}>
      <div className="root_container">
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
