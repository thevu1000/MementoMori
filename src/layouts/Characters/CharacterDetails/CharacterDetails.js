import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './CharacterDetails.module.scss';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);

const CharacterDetails = ({ data }) => {
    const contentParagraphRef = useRef(null);

    useEffect(() => {
        if (data.ver && contentParagraphRef.current) {
            contentParagraphRef.current.classList.add('margintop');
        }
    }, [data.ver]);

    return (
        <div className={cx('illust')}>
            <img src={data.image} alt="Character Image" />
            <div className={cx('character-text')}>

                <div
                    className={cx('ver-wrap', {
                        'has-ver': data.ver, // Thêm class này khi data.ver tồn tại
                    })}
                >
                    {data.ver && (
                        <p className={cx('ver-name')}>{data.ver}</p>
                    )}
                    <div className={cx('header')}>{data.name}</div>
                </div>


                <div className={cx('voice-actor')}>
                    <div className={cx('title')}>VOICE</div>
                    <div className={cx('voice-name')}>
                        {data.voice_actor_JP}
                    </div>
                </div>
                <div className={cx('youtube')}>
                    <a>
                        <img src='https://mememori-game.com/assets/en/img/gallery/btn_youtube.png' />
                        <span>Youtube</span>
                    </a>
                    <Button to={`/profile/${data.id}`} className={cx('special-btn')}>
                        CHI TIẾT
                    </Button>
                </div>
                <div className={cx('content')}>
                    <p ref={contentParagraphRef}>
                        {data.story}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;
