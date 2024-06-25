import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function Top({id}) {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id={id}className={cx('wrapper')}>
            <div className={cx('img-wrap')}>
                <img
                    src="https://mememori-game.com/assets/en/img/top/kv.webp"
                    alt="/"
                ></img>

                <div className={cx('signature-wrap')}>
                    <img
                        src="https://mememori-game.com/assets/en/img/top/kv_copy@pc.webp"
                        alt="/"
                    />
                </div>

                {showLogo && (
                    <div className={cx('logo-wrap')}>
                        <img
                            src="https://mememori-game.com/assets/en/img/top/kv_logo.webp"
                            alt="/"
                        />
                    </div>
                )}

                <div className={cx('button-wrapper')}>
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
    );
}

export default Top;
