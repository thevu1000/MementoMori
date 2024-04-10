import classNames from 'classnames/bind';
import styles from './Game.module.scss';
import Slider from "~/Component/Slider";

const cx = classNames.bind(styles)

function Game({id}) {

    const images = [
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_01.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_01.png'
        },
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_02.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_02.png'
        },
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_03.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_03.png'
        },
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_04.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_04.png'
        },
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_05.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_05.png'
        },
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_06.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_06.png'
        },
        {
            image: 'https://mememori-game.com/assets/en/img/top/game_07.jpg',
            title: 'https://mememori-game.com/assets/en/img/top/game_txt_07.png'
        },
    ]
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('game-wrapper')}>
                <h3 className={cx('game-title')}>GAME</h3>

                <Slider data={images}/>
            </div>
        </div>
    );
}

export default Game;