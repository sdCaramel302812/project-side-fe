import logo from 'src/assets/logo.svg';
import 'src/styles/Header.css';
import 'src/styles/Common.scss';

function Header() {
  return (
    <header className='App-header'>
      <div className='Header-Container'>
        <img src={logo} className='App-logo' alt='logo' />
        <button className='Primary-Button Login-Button'>Login</button>
      </div>
      </header>
  );
}

export default Header;