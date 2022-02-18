import logo from '../../assets/img/logo.png';
import './Logo.scss';

const Logo = () => (
  <div className="logo__wrapper">
    <img src={logo} alt="logo" className="logo" />
  </div>
);

export default Logo;
