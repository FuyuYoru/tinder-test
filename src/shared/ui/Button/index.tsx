import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...rest
}) => {
  const baseStyles = 'pt-[8px] pb-[10px] w-full text-white rounded-full font-medium transition bg-linear-to-tr from-[#FD267A] to-[#FF6036]';

  return (
    <button
      className={clsx(baseStyles, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
