import menu from 'src/assets/menu.svg';
import whiteMenu from 'src/assets/menu-white.svg';
import calendar from 'src/assets/calendar.svg';
import whiteCalendar from 'src/assets/calendar-white.svg';
import setting from 'src/assets/setting.svg';
import whiteSetting from 'src/assets/setting-white.svg';

function MenuIcon() {
  return (
    <img src={menu}/>
  );
}

function WhiteMenuIcon() {
  return (
    <img src={whiteMenu}/>
  );
}

function CalendarIcon() {
  return (
    <img src={calendar}/>
  );
}

function WhiteCalendarIcon() {
  return (
    <img src={whiteCalendar}/>
  );
}

function SettingIcon() {
  return (
    <img src={setting}/>
  );
}

function WhiteSettingIcon() {
  return (
    <img src={whiteSetting}/>
  );
}

export {
  MenuIcon,
  WhiteMenuIcon,
  CalendarIcon,
  WhiteCalendarIcon,
  SettingIcon,
  WhiteSettingIcon
};