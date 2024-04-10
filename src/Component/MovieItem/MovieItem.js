import classNames from "classnames/bind";
import styles from './MovieItem.module.scss'
import Button from "../Button";

const cx = classNames.bind(styles)

function MovieItem() {
    return (
        <Button className={cx('mv-item')} href={'https://youtu.be/g_4kZuhg44w'}>
            <div className={cx('mv-link')}>
                <img
                    src="https://mememori-game.com/assets/en/img/top/movie01.jpg"
                    className={cx('mv-thumb')}
                />
                <img
                    src="	https://mememori-game.com/assets/en/img/top/btn_play.png"
                    className={cx('play-btn')}
                />
            </div>
            <div className={cx('mv-overlay')}>
                <img src="https://mememori-game.com/assets/en/img/top/mask_movie.png" />
            </div>
        </Button>
    );
}

export default MovieItem;
