import type { NextPage } from "next";
import Voice from "./Voice";

import styles from './PeoplesView.module.css';

const PeopleView: NextPage<any> = ({ src, pictureSrc, name, mute, talking }) => {
  return (
    <div className={styles.peopleView}>
      {
        src
          ? <img
              src={src}
              className={styles.peopleImage}
            />
          : <div className={styles.pictureWrapper}>
              <img
                src={pictureSrc}
                className={styles.picture}
              />
            </div>
      }

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
