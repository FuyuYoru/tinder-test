import React, { RefObject } from 'react';
import clsx from 'clsx';
import variantStyles from './styles.module.scss';
import { useTheme } from '@app/providers/ThemeProvider';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
    & {
        inputRef?: RefObject<HTMLInputElement>;
    };

export const TextInput: React.FC<InputProps> = ({
    className,
    children,
    inputRef,
    ...rest
}) => {
    const baseStyles = 'px-[14px] py-[12px] w-full border-[1px] rounded-[8px] font-regular';
    const { theme } = useTheme();

    return (
        <div className={clsx(baseStyles, variantStyles[theme], className)}>
            <input
                ref={inputRef}
                className='w-full appearance-none border-none outline-none bg-transparent'
                {...rest}
            >
                {children}
            </input>
        </div>
    );
};
