import React from 'react';
import CharactersItem from "~/Component/CharactersItem";
import classNames from "classnames/bind";
import styles from './Gallery.module.scss'

const cx = classNames.bind(styles);

const imageArray = [
    { name: "Illya", id: "0" ,avatar: "https://mememori-game.com/assets/en/img/gallery/15_Illya/nav.png" },
    { name: "Iris", id: "1",avatar: "https://mememori-game.com/assets/en/img/gallery/16_Iris/nav.png" },
    { name: "Rosalie", id: "2",avatar: "https://mememori-game.com/assets/en/img/gallery/17_Rosalie/nav.png" },
    { name: "Amleth", id: "3",avatar: "https://mememori-game.com/assets/en/img/gallery/18_Amleth/nav.png" },
    { name: "Luke", id: "4",avatar: "https://mememori-game.com/assets/en/img/gallery/10_Luke/nav.png" },
    { name: "Olivia", id: "5",avatar: "https://mememori-game.com/assets/en/img/gallery/12_Olivia/nav.png" },
    { name: "Lunalynn", id: "6",avatar: "https://mememori-game.com/assets/en/img/gallery/11_Lunalynn/nav.png" },
    { name: "Amour", id: "7",avatar: "https://mememori-game.com/assets/en/img/gallery/06_Amour/nav.png" },
    { name: "Soltina", id: "8",avatar: "https://mememori-game.com/assets/en/img/gallery/02_Soltina/nav.png" },
    { name: "Merlyn", id: "9",avatar: "https://mememori-game.com/assets/en/img/gallery/01_Merlyn/nav.png" },
    { name: "Belle", id: "10",avatar: "https://mememori-game.com/assets/en/img/gallery/03_Belle/nav.png" },
    { name: "Fenrir", id: "11",avatar: "https://mememori-game.com/assets/en/img/gallery/04_Fenrir/nav.png" },
    { name: "Carol", id: "12",avatar: "https://mememori-game.com/assets/en/img/gallery/05_Carol/nav.png" },
    { name: "Natasha", id: "13",avatar: "https://mememori-game.com/assets/en/img/gallery/08_Natasha/nav.png" },
    { name: "AA", id: "14",avatar: "https://mememori-game.com/assets/en/img/gallery/07_AA/nav.png" }
];


function Gallery({id}) {
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('gallery-wrapper')}>
                <h3 className={cx('gallery-title')}>THƯ VIỆN</h3>
                <div className={cx('characters-list')}>
                    {imageArray.map((image, index) => (
                        <CharactersItem key={index} data={image} />
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
