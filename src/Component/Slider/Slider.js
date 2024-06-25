import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick'; // Import Slick Carousel
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel Theme CSS
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ data }) {
    useEffect(() => {
        $(document).ready(() => {
            $('.swiper-wrapper').not('.slick-initialized').slick(); // Initialize Slick Carousel when DOM is ready
        });
    }, []); // Empty dependency array ensures this effect only runs once after initial render

    return (
        <div className={cx('swiper')}>
            <div className={cx('swiper-wrapper')} data-slick='{ "variableWidth": true, "slidesToShow": 1, "slidesToScroll": 1, "centerMode": true}'>
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
