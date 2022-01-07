import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';

export type ButtonProps = {
  children: ReactNode,
  type: 'regularButton' | 'promoButton',
  onClick: () => void,
  kind?: 'regular' | 'danger',
  tabIndex?: number,
  href?: string,
  overrides?: ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>
};

const Button = (props: ButtonProps) => {
  return props.href ? (
    <a
      className={`${s[props.type]} ${props.kind === 'danger' ? s.danger : ''}`}
      href={props.href}
      tabIndex={props.tabIndex}
      {...props.overrides as AnchorHTMLAttributes<HTMLAnchorElement>}
    >
      {props.children}
    </a>
  ) : (
    <button
      type="button"
      className={`${s[props.type]} ${props.kind === 'danger' ? s.danger : ''}`}
      tabIndex={props.tabIndex}
      {...props.overrides as ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {props.children}
    </button>
  );
}

export default Button;
