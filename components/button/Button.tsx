import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface Props extends PropsWithChildren<any>{
  As?: 'button' | 'a';
}

const Button: React.FC<Props> = ({
  As = 'button',
  ...props
}) => {
  let className = styles['ui-button'];
  if (props.className) {
    className += ` ${props.className}`;
    delete props.className;
  }

  return (
    <As
      className={className}
      {...props}
    />
  );
};

export default Button;