import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrap')}>
                <h2 className={cx('cinzel')}>Planning &amp; Development</h2>
                <p><a className={cx('logo-link')} href="https://boi.jp/" target="_blank"><img src="https://mememori-game.com/assets/en/img/logo_boi.png" alt="Bank of Innovation, Inc." className={cx('logo')} /> <b>Bank of Innovation, Inc.</b></a></p>
                <h2 className={cx('cinzel')}>Title</h2>
                <p>MementoMori</p>
                <h2 className={cx('cinzel')}>Platform</h2>
                <p>iOS/Android</p>
                <h2 className={cx('cinzel')}>Genre</h2>
                <p>RPG</p>
                <h2 className={cx('cinzel')}>Price</h2>
                <p>Free to play </p>
                <p><small>(In-app purchases available)</small></p>
                <ul className={cx('sns')}>
                    <li className={cx('twitter')}><a href="https://twitter.com/mementomori_EN" target="_blank"><img src="https://mememori-game.com/assets/en/img/icon_twitter.png" alt="Twitter" /></a></li>
                    <li className={cx('youtube')}><a href="https://www.youtube.com/channel/UCn2z54MD-LAAtmXbS0nNlpg" target="_blank"><img src="https://mememori-game.com/assets/en/img/icon_youtube.png" alt="YouTube" /></a></li>
                    <li className={cx('facebook')}><a href="https://www.facebook.com/mementomoriEN" target="_blank"><img src="https://mememori-game.com/assets/en/img/icon_fb.png" alt="Facebook" /></a></li>
                </ul>
                <ul className={cx('links')}>
                    <li><a href="/en/rule">Terms of Service</a></li>
                    <li><a href="/en/subscription">Subscription Service User Agreement</a></li>
                    <li><a href="/en/privacy">Privacy Policy</a></li>
                    <li><a href="/en/privacy/?goto=dns" data-href="dns">Do Not Sell My Personal Information</a></li>
                    <li><a href="/en/guideline">Guidelines for the Use of Intellectual Property</a></li>
                </ul>
                <p className={cx('support')}>Contact Us：<a href="mailto:support@mememori-game.com">support@mememori-game.com</a></p>
                <p className={cx('copyrights')}>© Bank of Innovation, Inc.</p>
            </div>
        </footer>
    );
}

export default Footer;
