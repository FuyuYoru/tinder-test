import React from 'react';
import clsx from 'clsx';
import variantStyles from './styles.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'dark' | 'light';
};

export const TextInput: React.FC<InputProps> = ({
    variant = 'dark',
    className,
    children,
    ...rest
}) => {
    const baseStyles = 'px-[14px] py-[12px] w-full rounded-lg font-medium';

    return (
        <div className={clsx(baseStyles, variantStyles[variant], className)}>
            <input
                {...rest}
            >
                {children}
            </input>
        </div>
    );
};
