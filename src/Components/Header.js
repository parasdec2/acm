import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Toggle from '../Theme/toggle';
import './css/Header.css';
import logo from '../logo.svg';
import logo_tab from '../logo_tab.svg';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  drawerLight: {
    background: '#E2E2E2',
    color: '#363537',
  },
  drawerDark: {
    background: '#131d24',
    color: '#FAFAFA',
  },
});

function Header({ theme, toggleTheme }) {
  const classes = useStyles();
  const [leftDrawer, setLeftDrawer] = useState(false);
  const history = useHistory();

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var header = document.querySelector('.header');
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add('header-sticky');
    } else {
      header.classList.remove('header-sticky');
    }
  }

  const goToPageDrawer = (event) => {
    const v = event.target.attributes[0].ownerElement.innerText
      .toLowerCase()
      .replace(/\s+/g, '');
    if (v !== 'home') history.push(`/${v}`);
    else history.push(`/`);
  };

  const goToPage = (event) => {
    if (event.target.id === 'home' || event.target.id === 'headerImage')
      history.push(`/`);
    else history.push(`/${event.target.id}`);
  };

  const icon = (text) => {
    if (text === 'Home') return <HomeIcon style={{ color: '#3498db' }} />;
    if (text === 'Events') return <EventIcon style={{ color: '#3498db' }} />;
    if (text === 'Team') return <GroupIcon style={{ color: '#3498db' }} />;
    if (text === 'About Us') return <InfoIcon style={{ color: '#3498db' }} />;
    if (text === 'Contact Us')
      return <ContactSupportIcon style={{ color: '#3498db' }} />;
    if (text === 'Blog') return <BookIcon style={{ color: '#3498db' }} />;
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        <ListItem button key="joinus" onClick={goToPageDrawer}>
          <ListItemText primary="Join Us" />
        </ListItem>
        {['Home', 'Events', 'Team', 'Contact Us'].map((text) => {
          return (
            <ListItem button key={text} onClick={goToPageDrawer}>
              <ListItemIcon> {icon(text)} </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
        <Toggle theme={theme} toggleTheme={toggleTheme} sideMenu={true} />
      </List>
    </div>
  );

  const openDrawer = () => setLeftDrawer(true);
  const closeDrawer = () => setLeftDrawer(false);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__drawer">
          <MenuIcon
            style={{ fontSize: 30 }}
            className="header__drawer__icon"
            onClick={openDrawer}
          />
          <Drawer
            anchor="left"
            open={leftDrawer}
            onClose={closeDrawer}
            classes={{
              paper:
                theme === 'light' ? classes.drawerLight : classes.drawerDark,
            }}
          >
            {list()}
          </Drawer>
          <img
            id="headerImage"
            className="header__image__sm"
            src={logo}
            alt="logo"
            onClick={goToPage}
          />
        </div>
        <img
          id="headerImage"
          className="header__image"
          src={logo_tab}
          alt="ACM CEC"
          onClick={goToPage}
        />
        <div className="header__func">
          <h4 id="joinus" className="header__funcIcon" onClick={goToPage}>
            <center id="joinus">Join Us</center>
          </h4>
          <h4 id="home" className="header__funcIcon" onClick={goToPage}>
            <center id="home">Home</center>
          </h4>
          <h4 id="events" className="header__funcIcon" onClick={goToPage}>
            <center id="events">Events</center>
          </h4>
          <h4 id="team" className="header__funcIcon" onClick={goToPage}>
            <center id="team">Team</center>
          </h4>
          {/* <h4 id="aboutus" className="header__funcIcon" onClick={goToPage}>
            <center id="aboutus">About Us</center>
          </h4> */}
          <h4 id="contactus" className="header__funcIcon" onClick={goToPage}>
            <center id="contactus">Contact Us</center>
          </h4>
          {/* <h4 id="blog" className="header__funcIcon" onClick={goToPage}>
            <center id="blog">Blog</center>
          </h4> */}
        </div>
        <div className="header__theme__icon">
          <Toggle theme={theme} toggleTheme={toggleTheme} sideMenu={false} />
        </div>
      </div>
    </div>
  );
}

export default Header;
