// Body.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './body.module.scss';
import Top from './Top';
import Movie from './Movie';
import Gallery from './Gallery';
import Voice from './Voice';
import Song from './Song';
import Story from './Story';
import Specical from './Specical';
import Game from './Game';

const cx = classNames.bind(styles);

function Body() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Top id="top" />
            <img
                className={cx('illus')}
                src="https://mememori-game.com/assets/en/img/top/img_section.webp"></img>
            <Movie id="movie" />
            <Gallery id="gallery" />
            <Voice id="voice" />
            <Song id="song" />
            <Story id="story" />
            <Specical id="special" />
            <Game id="game"/>
        </div>
    );
}

export default Body;
