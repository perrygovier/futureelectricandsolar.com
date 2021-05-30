import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import styles from './ResponsiveContainer.module.scss';

interface Props extends PropsWithChildren<any>{
  As?: 'div'| 'section' | 'nav';
}

const ResponsiveContainer: React.FC<Props> = ({
  As = 'div',
  ...props
}) => {
  return (
    <As
      className={`${styles['ui-container']} ${props.className || ''}`}
      {...props}
    />
  );
};

export default ResponsiveContainer;