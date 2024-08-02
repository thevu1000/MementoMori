import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './BgmControl.module.scss';

const cx = classNames.bind(styles);

const BgmControl = ({ data }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Đặt âm lượng khi audioRef đã sẵn sàng
        }
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Audio playback error:', error);
            });
        }
    };

    const handlePause = () => {
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <dl className={cx("bgm")}>
            <dt>♪ {data.music_title}</dt>
            <audio ref={audioRef} src={data.background_music} loop></audio>
            <dd>
                <b className={cx("didact")}>BGM</b>
                <a href="#" className={cx("on", { active: isPlaying })} onClick={handlePlay}><span><em>ON</em></span></a>
                <a href="#" className={cx("off", { active: !isPlaying })} onClick={handlePause}><span><em>OFF</em></span></a>
            </dd>
        </dl>
    );
};

export default BgmControl;
