import type { NextPage } from 'next';

import styles from './Button.module.css';

import CallEndIcon from '@mui/icons-material/CallEnd';

interface Props {
  children?: any
  className?: string,
  hideOnPhone?: boolean;
  onClick?: (...props: any) => any
  [key: string]: any
}

const Button: NextPage<Props> = ({ children, hideOnPhone, ...props }) => {
  return (
    <div
      {...props}
      className={[styles.button, props.className, hideOnPhone ? styles.hideOnPhone : ''].join(' ')}
    >
      {children}
    </div>
  )
};

export const LeaveButton: NextPage<Props> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={[styles.leaveButton, props.className].join(' ')}
    >
      <CallEndIcon />
    </div>
  )
}

export default Button;
