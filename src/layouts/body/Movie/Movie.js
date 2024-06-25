// Movive.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Movie.module.scss';
import Button from '~/Component/Button';
import MovieItem from '~/Component/MovieItem';

const cx = classNames.bind(styles);

function Movive({ id }) {
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('movie-wrapper')}>
                <h3 className={cx('movie-title')}>MOVIE</h3>
                <div className={cx('mv-list')}>
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <Button outline small href={'https://www.youtube.com/channel/UCn2z54MD-LAAtmXbS0nNlpg'} className={cx('more-btn')}>More</Button>
                </div>
            </div>
        </div>
    );
}

export default Movive;
