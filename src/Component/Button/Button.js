import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    download = false,
    primary = false,
    outline = false,
    text = false, // Corrected prop name
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    song=false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    onMouseOver,
    onMouseOut,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        onMouseOver, // Added onMouseOver prop
        onMouseOut, // Added onMouseOut prop
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        download,
        primary,
        outline,
        text, // Corrected prop name
        disabled,
        rounded,
        song,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
