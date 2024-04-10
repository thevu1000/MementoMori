import classNames from 'classnames/bind';
import styles from './Story.module.scss';

const cx = classNames.bind(styles);

function Story({id}) {
    return (
        <div id={id} className={cx('wrapper')}>
            <img
                className={cx('background')}
                src="	https://mememori-game.com/assets/en/img/top/bg_story@pc.webp"
            ></img>
            <div className={cx('story-wrapper')}>
                <h3 className={cx('story-title')}>STORY</h3>

                <div className={cx('story')}>
                    <p>
                        There are girls who many call <span>“witches.”</span>
                        <br />
                        Although they themselves are ordinary, they can wield
                        slightly extraordinary powers.
                        <br /> However, when calamity spreads throughout the
                        land, witches begin to be feared and detested.
                        <br /> Before long, the Church of Longinus commenced
                        what would be known as
                        <span>“The Witch Hunt.”</span>
                    </p>
                    <p>
                        “Witches are to blame for this calamity. If we kill
                        them, then the calamity will vanish along with them!”
                    </p>
                    <p>
                        Witches are executed one by one.
                        <br /> But one day, as madness seizes control of the
                        world, it is suddenly overrun by
                        <span>“Curses.”</span>
                        <br /> A country incinerated by hellfire. A kingdom
                        consumed by crystals. An empire purged by the Tree of
                        Life.
                        <br /> Such are the woeful desires of those who are
                        called
                        <span>“Witches of Qlipha.”</span>
                        <br /> Without any means to defend themselves, nation
                        after nation falls into ruin, until finally—
                        <br /> The fractured land is sent adrift high into the
                        sky.
                    </p>
                    <p>
                        Meanwhile, the people have yet to take notice.
                        <br /> From within these girls cursed to be witches,
                        there emanates glimmers of hope.
                        <br /> In order to save their decimated world, these
                        girls set forth liberating the land from darkness.
                        <br /> For they believe that it is the right thing to
                        do...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Story;
