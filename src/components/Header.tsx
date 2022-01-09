import logo from 'src/assets/logo.svg';
import 'src/styles/Header.css';
import 'src/styles/Common.scss';

function Header() {
  return (
    <div className='App-Header'>
      <div className='Header-Container'>
        <img src={logo} className='App-logo' alt='logo' />
        <button className='Primary-Button Login-Button'>Login</button>
      </div>
    </div>
  );
}

export default Header;