import classNames from 'classnames/bind';
import styles from './Song.module.scss';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function Song({ id }) {
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('song-wrapper')}>
                <h3 className={cx('song-title')}>CA KHÚC</h3>
                <p className={cx('song-descript')}>Mỗi nhân vật đều có bài hát chủ đề riêng của họ.</p>
                <div className={cx('singer-wrap')}>
                    <p className={cx('singers')}>
                        Atarayo, Kano, kurokumo, 96NEKO, Koresawa, Zakuro,
                        Haruka Shimotsuki, Daoko, DAZBEE, ChouCho, Seiko
                        Niizuma, Hakubi, Haruna Luna, Ayaka Hirahara, MARiA,
                        Sayaka Yamamoto, Rei(TUYU), Wakana and more...
                    </p>
                </div>

                <p className={cx('description')}>
                Đây là dàn diễn viên lồng tiếng Nhật cho trò chơi.
                    <br /> Giọng của các nhân vật có thể được chuyển đổi từ tiếng Anh sang tiếng Nhật trong cài đặt của trò chơi.
                </p>

                <Button outline song className={cx('song-btn')}>Nghe</Button>
            </div>
        </div>
    );
}

export default Song;
