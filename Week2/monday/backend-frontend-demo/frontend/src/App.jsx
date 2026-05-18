import { Outlet, NavLink} from "react-router-dom";
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Songs'>Songs</NavLink>
      </nav>
      {/* Child routers render here */}
      <Outlet />
    </div>
  )
}

export default App
