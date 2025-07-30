import clsx from "clsx"
import { ReactNode } from "react"
import typography from "@shared/configs/styles/typography.module.scss";
import { useTheme } from "@app/providers/ThemeProvider";
import variantStyles from './styles.module.scss';

interface ITypography {
    variant?: string
    color?: string
    children?: ReactNode
    classNames?: string
}

export const Typography: React.FC<ITypography> = ({
  variant = 'regular13',
  color,
  children,
  classNames,
}) => {
  const { theme } = useTheme();

  return (
    <span
      className={clsx(
        typography[variant],
        color,
        classNames
      )}
    >
      {children}
    </span>
  );
};