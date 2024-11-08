import classNames from 'classnames/bind';
import styles from './CharactersItem.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function CharactersItem({ data, className }) {
    return (
        <Button to={`/profile/${data.id}`} className={cx('character-wrap', className)}>
            <img alt="/" src={`${data.avatar}`} className={cx('character-img')} />
        </Button>

    );
}

export default CharactersItem;
