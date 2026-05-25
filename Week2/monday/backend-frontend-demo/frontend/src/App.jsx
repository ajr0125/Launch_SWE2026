import { Outlet, NavLink } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/songs'>Songs</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
