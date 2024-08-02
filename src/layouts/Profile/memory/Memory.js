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
    const [isPlaying, setIsPlaying] = useState(null);
    const audioRefs = useRef({});

    const handlePlay = (index, src) => {
        if (audioRefs.current[index]) {
            audioRefs.current[index].pause();
            audioRefs.current[index].currentTime = 0;
        }
        
        const audio = new Audio(src);
        audioRefs.current[index] = audio;
        
        audio.play();
        setIsPlaying(index);

        audio.onended = () => {
            setIsPlaying(null);
        };
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
                                    onClick={() => handlePlay(overallIndex, entry.voice_src)}
                                />
                                <p className={cx('memory-paragraph')}>{entry.text}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Memory;
