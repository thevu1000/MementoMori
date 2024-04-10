import React from 'react';
import CharactersItem from "~/Component/CharactersItem";
import classNames from "classnames/bind";
import styles from './Gallery.module.scss'

const cx = classNames.bind(styles);

const imageArray = [
    { char: { link: "/assets/en/img/gallery/15_Illya/nav.png" } },
    { char: { link: "/assets/en/img/gallery/16_Iris/nav.png" } },
    { char: { link: "/assets/en/img/gallery/17_Rosalie/nav.png" } },
    { char: { link: "/assets/en/img/gallery/18_Amleth/nav.png" } },
    { char: { link: "/assets/en/img/gallery/10_Luke/nav.png" } },
    { char: { link: "/assets/en/img/gallery/12_Olivia/nav.png" } },
    { char: { link: "/assets/en/img/gallery/11_Lunalynn/nav.png" } },
    { char: { link: "/assets/en/img/gallery/06_Amour/nav.png" } },
    { char: { link: "/assets/en/img/gallery/02_Soltina/nav.png" } },
    { char: { link: "/assets/en/img/gallery/01_Merlyn/nav.png" } },
    { char: { link: "/assets/en/img/gallery/03_Belle/nav.png" } },
    { char: { link: "/assets/en/img/gallery/04_Fenrir/nav.png" } },
    { char: { link: "/assets/en/img/gallery/05_Carol/nav.png" } },
    { char: { link: "/assets/en/img/gallery/08_Natasha/nav.png" } },
    { char: { link: "/assets/en/img/gallery/07_AA/nav.png" } }
];

function Gallery({id}) {
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('gallery-wrapper')}>
                <h3 className={cx('gallery-title')}>GALLERY</h3>
                <div className={cx('characters-list')}>
                    {imageArray.map((image, index) => (
                        <CharactersItem key={index} data={image.char} />
                    ))}
                </div>

                <div className={cx('description')}>
                    <p>Clicking on each character's icon will play their Lament (original theme song).<br/>
Please ensure your sound is ON and enjoy!</p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
