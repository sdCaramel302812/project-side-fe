import { useState } from 'react';
import Header from 'src/components/Header';
import 'src/styles/Project.scss';
import 'src/styles/Common.scss';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'src/styles/ProSideBarCustom.scss';

import menu from 'src/assets/menu-white.svg';
import { WhiteMenuIcon, WhiteCalendarIcon, WhiteSettingIcon } from 'src/components/Icon';

function Project() {
  const [isSideBarCollapsed, setSideBarCollapsed] = useState(true);

  const sideBarCollapseClick = () => {
    setSideBarCollapsed(!isSideBarCollapsed);
  }

  return (
    <div className='ProjectRoot'>
      <ProSidebar
        collapsed={isSideBarCollapsed}
      >
        <SidebarHeader>
        <Menu iconShape='square'>
            <MenuItem >
              <button 
                className='Icon-Button'
                style={{backgroundImage: `url(${menu})`, width: '22px', height: '22px'}}
                onClick={sideBarCollapseClick}
              />
            </MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape='square'>
            <MenuItem icon={<WhiteCalendarIcon/>}>Dashboard</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
        <Menu iconShape='square'>
            <MenuItem icon={<WhiteSettingIcon/>}>Setting</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
      <main className='PrjectMain'>
        <Header/>
      </main>
    </div>
  );
}

export default Project;