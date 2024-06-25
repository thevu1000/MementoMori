// BackgroundVideo.jsx
import React from 'react';
import classNames from 'classnames/bind';
import styles from './BackgroundVideo.module.scss';

const cx = classNames.bind(styles);

const BackgroundVideo = ({ data }) => {
    return (
        <div className={cx('background-vid')}>
            <div className={cx('video-wrap')}>
                {data.video ? (
                    <video autoPlay muted loop>
                        <source
                            src={data.video}
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <div className={cx('no-video')}></div>
                )}
            </div>
            <div className={cx('character-title')}>GALLERY</div>
        </div>
    );
};

export default BackgroundVideo;
