import { useState } from 'react';
import Header from 'src/components/Header';
import SideBar from 'src/components/SideBar';
import 'src/styles/Common.scss';


function Project() {

  return (
    <div className='Root'>
      <Header/>
      <SideBar/>
    </div>
  );
}

export default Project;