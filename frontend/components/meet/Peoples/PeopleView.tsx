import type { NextPage } from "next";
import Voice from "./Voice";

import styles from './PeoplesView.module.css';

const PeopleView: NextPage<any> = ({ src, name, mute, talking }) => {
  return (
    <div className={styles.peopleView}>
      <img
        src={src}
        className={styles.peopleImage}
      />

      <span className={styles.peopleName}>{name}</span>

      <Voice
        mute={mute}
        talking={talking}
        className={styles.microphone}
      />
    </div>
  )
};

export default PeopleView;
