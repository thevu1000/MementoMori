import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import styles from './body.module.scss';
import Top from './Top';
import Movie from './Movie';
import Gallery from './Gallery';
import Voice from './Voice';
import Song from './Song';
import Story from './Story';
import Game from './Game';

const cx = classNames.bind(styles);

function Body() {
    const location = useLocation();
    const [imageSrc, setImageSrc] = useState(
        window.innerWidth <= 768
            ? 'https://mememori-game.com/assets/en/img/top/img_section@sp.webp'
            : 'https://mememori-game.com/assets/en/img/top/img_section.webp'
    );

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get('scrollTo');
        if (scrollTo) {
            const element = document.getElementById(scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.search]);

    useEffect(() => {
        const handleResize = () => {
            setImageSrc(
                window.innerWidth <= 768
                    ? 'https://mememori-game.com/assets/en/img/top/img_section@sp.webp'
                    : 'https://mememori-game.com/assets/en/img/top/img_section.webp'
            );
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Top id="top" />
            <img
                className={cx('illus')}
                src={imageSrc}
                alt=""
            />
            <Movie id="movie" />
            <Gallery id="gallery" />
            <Voice id="voice" />
            <Song id="song" />
            <Story id="story" />
            <Game id="game" />
        </div>
    );
}

export default Body;
