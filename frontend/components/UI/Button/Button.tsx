import React from 'react';

import cn from 'classnames';

import style from './style.module.css';

type Props = {
  children?: JSX.Element;
  variant?: string;
};
const Button: React.FC<Props> = ({ children, variant }) => {
  return (
    <button className={cn(style.base, variant ? style[variant] : undefined)}>
      {children}
    </button>
  );
};

export default Button;
