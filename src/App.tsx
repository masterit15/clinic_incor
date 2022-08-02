import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import './sass/main.sass';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';
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
      isLoading
    }}>
      <div className="root_container">
        <Sidebar />
        <main>
          <Header />
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
          <Footer />
        </main>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
