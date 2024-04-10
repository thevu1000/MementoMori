import classNames from 'classnames/bind';
import styles from './Voice.module.scss';

const cx =classNames.bind(styles)

function Voice({id}) {
    return (
        <div id={id} className={cx('wrapper')}>
            <div className={cx('voice-wrapper')}>
                <h3 className={cx('voice-title')}>VOICE</h3>
                <div className={cx('voice-actor-wrap')}>
                    <p className={cx('voice-actors')}>
                        Rikako Aida, Yuu Asakawa, Hiromi Igarashi, Yui Ishikawa,
                        Miku Ito, Sumire Uesaka, Ayaka Ohashi, Yui Ogura, Akari
                        Kito, Ami Koshimizu, Shuka Saito, Rie Tanaka, Atsumi
                        Tanezaki, Yukari Tamura, Minori Chihara, Miyu Tomita,
                        Yoshino Nanjo, Kana Hanazawa, Yui Horie, Kaede Hondo,
                        Inori Minase, Aoi Yuki, Yukana and more...
                    </p>
                </div>

                <p className={cx('description')}>
                    The above is the Japanese cast for the game.<br/> Voices can be
                    changed from English to Japanese in the game's settings.
                </p>
            </div>
        </div>
    );
}

export default Voice;
