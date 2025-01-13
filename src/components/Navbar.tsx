import './Navbar.css'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav>
      <a className='nav-logo'><img src={logo} alt='Logo' className='nav-logo-image'></img></a>
      <div className='separator'></div>
      <a className='hermien'>Hermien</a>
      <a className='blog'>Blog</a>
      <a className='contact'><i className="fa-solid fa-envelope"></i>Contact</a>
    </nav>
  );
}

export default Navbar;