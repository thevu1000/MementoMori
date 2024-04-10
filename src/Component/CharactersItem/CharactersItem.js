import classNames from 'classnames/bind';
import styles from './CharactersItem.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function CharactersItem({ data }) {
    const image = data.link
    console.log(image);
    return (
        <Button className={cx('character-wrap')}>
            <img alt="/" src={`https://mememori-game.com${data.link}`} className={cx('character-img')} />
        </Button>
    );
}

export default CharactersItem;
