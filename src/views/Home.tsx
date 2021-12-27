import { useState } from 'react';
import Header from 'src/components/Header';
import 'src/styles/Common.scss';
import 'src/styles/Home.scss';

function UnLoggedIn() {
  return (
    <div></div>
  );
}

function LoggedIn() {
  return (
    <div className='Home'>
      <div>
        <span style={{verticalAlign: '-webkit-baseline-middle', fontSize: 20}}>My Projects</span>
        <button className='Outline-Button New-Project-Button'>new</button>
      </div>
      <div>
        <div className='Project-Container'>Hello</div>
      </div>
    </div>
  );
}

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <Header/>
      {isLoggedIn ? <LoggedIn/> : <UnLoggedIn/>}
    </div>
  );
}

export default Home;