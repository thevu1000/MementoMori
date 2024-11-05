import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import NavItem from './NavItem';
import { auth, signInWithGoogle, logOut } from "~/firebase"

const cx = classNames.bind(styles);

function Header({ id }) {
  const navListWrapRef = useRef(null);
  const openWrapRef = useRef(null);
  const closeWrapRef = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => {
    if (navListWrapRef.current) {
      navListWrapRef.current.style.left = '100%'; // Adjust the value based on your CSS
    }
  };

  useEffect(() => {
    if (openWrapRef.current && navListWrapRef.current) {
      openWrapRef.current.onclick = () => {
        navListWrapRef.current.style.left = '0';
      };
    }

    if (closeWrapRef.current) {
      closeWrapRef.current.onclick = closeMenu;
    }
  }, []);
  const [user, setUser] = useState(null);
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
          setUser(currentUser);
      });
      return () => unsubscribe();
  }, []);
  if (user) {
      console.log(user.uid);
  }

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
      <div className={cx('header')}>
        <div className={cx('logoWrap')}>
          <img src='https://mememori-game.com/assets/en/img/top/kv_logo.webp' alt="Logo" />
        </div>
        <div className={cx('navListWrap')} ref={navListWrapRef}>
          <div className={cx('closeWrap')} ref={closeWrapRef}>
            <p>CLOSE</p>
            <span></span>
          </div>
          <ul className={cx('wrapper')}>
            {navItems.map((item, index) => (
              <li key={index} onClick={closeMenu}>
                <NavItem
                  id={item.id}
                  text={item.text}
                  scrollToElement={scrollToElement}
                />
              </li>
            ))}
            {user ? (
                    <div>
                        <p>Xin chào, {user.displayName}</p>
                        <button onClick={logOut}>Đăng xuất</button>
                    </div>
                ) : (
                    <button onClick={signInWithGoogle}>Đăng nhập bằng Google</button>
                )}
          </ul>
        </div>
        <div className={cx('openWrap')} ref={openWrapRef}>
          <svg className={cx('openIcon')} style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M916.6 210.2H107.4c-17.7 0-32-14.3-32-32s14.3-32 32-32h809.2c17.7 0 32 14.3 32 32s-14.3 32-32 32zM714.3 544H107.4c-17.7 0-32-14.3-32-32s14.3-32 32-32h606.9c17.7 0 32 14.3 32 32s-14.3 32-32 32zM916.6 877.8H107.4c-17.7 0-32-14.3-32-32s14.3-32 32-32h809.2c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Header;
