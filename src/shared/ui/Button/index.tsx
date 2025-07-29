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
  const baseStyles = 'pt-[8px] pb-[10px] rounded-md font-medium transition bg-linear-to-r from-[#FD267A] to-[#FF6036]';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
