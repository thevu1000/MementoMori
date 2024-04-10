import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ data }) {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            centeredSlides: true,
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        const stylesheet = document.styleSheets[0];
        stylesheet.insertRule(
            '.swiper-pagination-bullet-active { background: #000 !important;}',
            0,
        );
    }, []); // Empty dependency array ensures this effect only runs once after initial render

    return (
        <div className={cx('swiper')}>
            <div className={cx('swiper-wrapper')}>
                {data.map((image, index) => (
                    <div key={index} className={cx('swiper-slide')}>
                        <img className={cx('image')} src={image.image} alt="image" />
                        <img src={image.title} alt="title" />
                    </div>
                ))}
            </div>
            <div className={cx('swiper-pagination')}></div>
            <div className={cx('swiper-button-prev')}></div>
            <div className={cx('swiper-button-next')}></div>
            <div className={cx('swiper-scrollbar')}></div>{' '}
            {/* Fixed class attribute */}
        </div>
    );
}

export default Slider;
