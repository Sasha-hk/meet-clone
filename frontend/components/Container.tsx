import type { NextPage } from "next";

import styles from '../styles/components/Container.module.css';

const Container: NextPage<any> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={[styles.Container, props.className].join(' ')}
    >
      {children}
    </div>
  )
}

export default Container;
