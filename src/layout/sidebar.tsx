import React from 'react'
import { Link } from 'react-router-dom'
export default function sidebar() {
  return (
    <aside className='sidebar'>
      <nav>
        <ul>
          <li><Link to="/home"><i className="fa fa-home"></i>Главная</Link></li>
          <li><Link to="/products"><i className="fa fa-database"></i></Link></li>
        </ul>
      </nav>

    </aside>
  )
}
