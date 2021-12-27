import { useState } from 'react';
import Header from 'src/components/Header';

function UnLoggedIn() {
  return (
    <div></div>
  );
}

function LoggedIn() {
  return (
    <div>Hello</div>
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