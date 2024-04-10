import classNames from "classnames/bind";
import styles from './Special.module.scss'
import Button from "~/Component/Button";

const cx = classNames.bind(styles)

function Special({id}) {
    return (
        <div id={id} className={cx('wrapper')}>
            <img className={cx('special-background')} src="https://mememori-game.com/assets/en/img/top/bg_special@pc.webp"/>
            <div className={cx('special-wrapper')}>
            <h3 className={cx('special-title')}>SPECIAL</h3>

            <div className={cx('button-wrapper')}>
                <Button href={'https://mememori-game.com/en/special/'} className={cx('special-btn')}>
                    INTERVIEW
                </Button>

                <Button href={'https://mememori-game.com/en/special/message/'} className={cx('special-btn')}>
                    MESSAGE
                </Button>

                <Button href={'https://mememori-game.com/en/special/download/'} className={cx('special-btn')}>
                    DOWNLOAD
                </Button>
            </div>

            <div className={cx('beginner-wrap')}>
                <Button className={cx('beginner-btn')} href={'https://mememori-game.com/en/special/beginner/'}>
                    <image src="https://mememori-game.com/assets/en/img/top/btn_beginner_active.png"/>
                </Button>
            </div>
            </div>
        </div>
    );
}

export default Special;