import React from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import NavItem from './NavItem';

const cx = classNames.bind(styles);

function Header({id}) {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'top', text: 'TOP' },
    { id: 'movie', text: 'MOVIE' },
    { id: 'gallery', text: 'GALLERY' },
    { id: 'voice', text: 'VOICE' },
    { id: 'song', text: 'SONG' },
    { id: 'story', text: 'STORY' },
    { id: 'special', text: 'SPECIAL' },
    { id: 'game', text: 'GAME' },
  ];

  return (
    <nav className={cx('nav')}>
      <ul className={cx('wrapper')}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            id={item.id}
            text={item.text}
            scrollToElement={scrollToElement}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Header;
