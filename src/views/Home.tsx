import { useState } from 'react';
import Header from 'src/components/Header';
import 'src/styles/Common.scss';
import 'src/styles/Home.scss';

function UnLoggedIn() {
  return (
    <div></div>
  );
}

function ProjectItem() {
  return (
    <div className='Project-Item'>
      hello
      <button className='Icon-Button Project-Edit-Button'></button>
      <button className='Icon-Button Project-Member-Button'></button>
      <button className='Icon-Button Project-Setting-Button'></button>
    </div>
  );
}

function ProjectContainer() {
  return (
    <div className='Project-Container'>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
    </div>
  );
}

function LoggedIn() {
  return (
    <div className='Home'>
      <div>
        <span style={{verticalAlign: '-webkit-baseline-middle', fontSize: 20}}>My Projects</span>
        <button className='Outline-Button New-Project-Button'>New project</button>
      </div>
      <div>
        <ProjectContainer/>
      </div>
    </div>
  );
}

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div className='Root'>
      <Header/>
      {isLoggedIn ? <LoggedIn/> : <UnLoggedIn/>}
    </div>
  );
}

export default Home;