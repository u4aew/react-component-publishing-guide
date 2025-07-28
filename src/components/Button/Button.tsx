import styles from './Button.module.scss';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const modeClass = primary ? styles.primary : styles.secondary;
  const sizeClass = styles[size];

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      className={[styles.button, sizeClass, modeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
