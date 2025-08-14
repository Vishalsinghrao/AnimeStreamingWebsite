import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}><li><h4>Home</h4></li></NavLink>
          <NavLink to="/anime" className={({ isActive }) => isActive ? "active" : ""}><li><h4>Anime</h4></li></NavLink>
          <NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}><li><h4>Movies</h4></li></NavLink>
          <NavLink to="/popular" className={({ isActive }) => isActive ? "active" : ""}><li><h4>Most Popular</h4></li></NavLink>
          <NavLink to="/top-airing" className={({ isActive }) => isActive ? "active" : ""}><li><h4>Top Airing</h4></li></NavLink>
        </ul>
        {isLoggedIn ? (
          <button className='logout-btn' onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/login"><button className='login-btn'>Login</button></NavLink>
        )}
      </nav>
    </div>
  )
}

export default Navbar;
