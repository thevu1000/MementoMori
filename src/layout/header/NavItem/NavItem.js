// NavItem.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

function NavItem({ text, id, scrollToElement }) {
    const handleClick = () => {
        scrollToElement(id);
    };
    
    return (
        <li className={cx('nav-item')} onClick={handleClick}>
            {text}
        </li>
    );
}

export default NavItem;
