import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import './sass/main.sass';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';

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
      <BrowserRouter>
        <div className="row">
          <Sidebar />
          <main>
            <Header />
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
