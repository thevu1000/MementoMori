import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from './Memory.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Memory({ datas }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRefs = useRef([]);

    const handlePlay = (index) => {
        setIsPlaying(index);
        audioRefs.current[index].play();
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className={cx('memory-wrap')}>
            {datas && datas.map((content, chapterIndex) => (
                <div key={chapterIndex} className={cx('memory-item')}>
                    <h3 className={cx('chapter-name')}>Chapter {content.chapter}</h3>
                    {content.entries && content.entries.map((entry, entryIndex) => {
                        const overallIndex = chapterIndex * 100 + entryIndex; // Combine chapterIndex and entryIndex to form a unique overall index
                        return (
                            <div key={overallIndex} className={cx('memory-content')}>
                                <FontAwesomeIcon
                                    className={cx('speaker-item', { 'playing': isPlaying === overallIndex })}
                                    icon={faVolumeHigh}
                                    onClick={() => handlePlay(overallIndex)}
                                />
                                <p className={cx('memory-paragraph')}>{entry.text}</p>
                                <audio ref={(ref) => (audioRefs.current[overallIndex] = ref)} src={entry.voice_src} onEnded={handleAudioEnded}></audio>
                            </div>
                        )
    
                    })}
                </div>
            ))}
        </div>
    );
    
}

export default Memory;
