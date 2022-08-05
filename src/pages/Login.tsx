import React, { useContext, FormEvent } from 'react'
import { AuthContext } from '../context';
export default function Login() {
  const { isAuth, setIsAuth, setLoading } = useContext(AuthContext);

  const login = (event: FormEvent<any>) => {
    event.preventDefault();
    setLoading(true)
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <form className='auth_form' onSubmit={login}>
      <input className='input' type="email" name="email" id="email" />
      <input className='input' type="password" name="password" id="password" />
      <button className='btn' type="submit">Войти</button>
    </form>
  )
}
