import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface Props extends PropsWithChildren<any>{
  As?: 'button' | 'a';
}

const ResponsiveContainer: React.FC<Props> = ({
  As = 'button',
  ...props
}) => {
  return (
    <As
      className={`${styles['ui-button']} ${props.className || ''}`}
      {...props}
    />
  );
};

export default ResponsiveContainer;