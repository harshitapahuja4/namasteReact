
import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
      <div className='header'>
        <div className='logo'>
            <img src={LOGO_URL}></img>
        </div>
        <div className='nav-bar'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;