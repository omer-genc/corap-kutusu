import React from 'react';

import cn from 'classnames';

import style from './style.module.css';

type Props = {
  children?: JSX.Element | string;
  variant?: string;
  onClick?: () => void;
  props?: any;
  disabled?: boolean;
  className?: string;
};
const Button: React.FC<Props> = ({
  children,
  variant,
  props,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={
        className + ' ' + cn(style.base, variant ? style[variant] : undefined)
      }
    >
      {children}
    </button>
  );
};

export default Button;
