import React from 'react';
import cx from 'classnames';
import styles from './index.less';

interface ButtonProps {
    style?: Object,
    className?: String,
    size?: String,
    loading?: Boolean,
    disabled?: Boolean,
    children?: any
}

export default (props: ButtonProps) => {
    const {
        style,
        className,
        size,
        loading,
        disabled,
        children
        // ...restProps
    } = props;
    return (
        <button
            // disabled={disabled}
            style={style}
            className={cx(
                styles.button,
                styles[`button-${size}`],
                {
                    [styles['button-loading']]: loading,
                },
                className
            )}
        // {...restProps}
        >{children}</button>
    );
};

// Button.defaultProps = defaultButtonProps;
