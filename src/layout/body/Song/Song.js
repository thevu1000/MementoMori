import classNames from 'classnames/bind';
import styles from './Song.module.scss';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function Song({ id }) {
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('song-wrapper')}>
                <h3 className={cx('song-title')}>SONG</h3>
                <p className={cx('song-descript')}>Every character has their own original theme song.</p>
                <div className={cx('singer-wrap')}>
                    <p className={cx('singers')}>
                        Atarayo, Kano, kurokumo, 96NEKO, Koresawa, Zakuro,
                        Haruka Shimotsuki, Daoko, DAZBEE, ChouCho, Seiko
                        Niizuma, Hakubi, Haruna Luna, Ayaka Hirahara, MARiA,
                        Sayaka Yamamoto, Rei(from TUYU), Wakana and more...
                    </p>
                </div>

                <p className={cx('description')}>
                    The above is the Japanese cast for the game.
                    <br /> Voices can be changed from English to Japanese in the
                    game's settings.
                </p>

                <Button outline song>Listen</Button>
            </div>
        </div>
    );
}

export default Song;
