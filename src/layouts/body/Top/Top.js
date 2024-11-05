import React from 'react';
import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import homePageBg from '../../../assets/homePageBg.mp4';
import Button from '~/Component/Button';


const cx = classNames.bind(styles);

function Top() {

    return (
        <div>
            <div className={cx('video-bg')}>
                <div className={cx('video-bg__content')}>
                    <div className={cx('video-bg__overlay')}>
                        <div className={cx('title')}>
                        <img src='https://mememori-game.com/assets/en/img/top/kv_logo.webp' alt="Logo" />
                        </div>
                        <div className={cx('description')}>
                            <p>
                                “Mọi con đường đều dẫn đến ‘Tạm biệt’ của chúng ta.”
                                Tự hào với một bản nhạc hoành tráng có thể làm đảo lộn thế giới trò chơi và một số thiết kế tuyệt đẹp nhất từng thấy trong một trò chơi, tựa game mới nhất của Bank of Innovation, MementoMori, cuối cùng cũng đã ra mắt!
                                Các bài hát được trình bày bởi nhiều nghệ sĩ nổi tiếng đã nâng tầm thế giới phong phú của MementoMori.
                            </p>
                        </div>
                        <div className={cx('btn-container')}>
                            <Button
                                download
                                className={cx('Download-btn')}
                                href={
                                    'https://apps.apple.com/us/app/mementomori-afkrpg/id1611490041'
                                }
                            >
                                <img
                                    src="https://mememori-game.com/assets/en/img/btn_app-store.webp"
                                    alt="/"
                                />
                            </Button>

                            <Button
                                download
                                className={cx('Download-btn')}
                                href={
                                    'https://play.google.com/store/apps/details?id=jp.boi.mementomori.android'
                                }
                            >
                                <img
                                    src="https://mememori-game.com/assets/en/img/btn_google-play.webp"
                                    alt="/"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
                <video autoPlay muted loop className={cx('video-bg__video')}>
                    <source src={homePageBg} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Top;