import './Navbar.css'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className='nav-link nav-logo'><img src={logo} alt='Logo' className='nav-logo-image'></img></NavLink>
      <div className='separator'></div>
      <NavLink to="/hermien" className='nav-link hermien'>Hermien</NavLink>
      <NavLink to="/blog" className='nav-link blog'>Blog</NavLink>
      <NavLink to="/contact" className='contact'><i className="fa-solid fa-envelope"></i>Contact</NavLink>
    </nav>
  );
}

export default Navbar;