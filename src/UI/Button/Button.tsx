import { FC } from 'react';

import cl from './Button.module.scss'

interface IButton {
    children?: React.ReactNode,
    title: string,
    onClick: ()=> void
}

const Button: FC<IButton> = ({children, ...props}) => {
  return (
    <button className={cl.button} {...props}>
        {children}
        {props.title}
    </button>
  );
};

export default Button;