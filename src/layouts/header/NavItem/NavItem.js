// NavItem.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function NavItem({ text, id, scrollToElement }) {
    const handleClick = () => {
        scrollToElement(id);
    };
    
    return (
        <Button to={'/'} className={cx('nav-item')} onClick={handleClick}>
            {text}
        </Button>
    );
}

export default NavItem;
