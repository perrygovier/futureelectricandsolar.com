import { PropsWithChildren } from 'react';
import styles from './ResponsiveContainer.module.scss';

interface Props extends PropsWithChildren<any>{
  As?: 'div'| 'section' | 'nav' | 'header' | 'main';
}

const ResponsiveContainer: React.FC<Props> = ({
  As = 'div',
  ...props
}) => {
  let className = styles['ui-container'];
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

export default ResponsiveContainer;