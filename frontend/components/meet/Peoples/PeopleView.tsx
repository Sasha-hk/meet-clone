import type { NextPage } from "next";
import Voice from "./Voice";

import styles from './PeoplesView.module.css';
import { useState } from "react";

const PeopleView: NextPage<any> = ({ src, pictureSrc, name, mute, talking }) => {
  const [source, setSource]: any = useState({
    src,
    pictureSrc,
    hash: Date.now()
 })

  return (
    <div
      className={styles.peopleView}
      onClick={() => {
        setSource({
          src,
          pictureSrc,
          hash: Date.now(),
        })
      }}
    >
      {
        src
          ? <img
              src={`${source.src}?${source.hash}`}
              className={styles.peopleImage}
            />
          : <div className={styles.pictureWrapper}>
              <img
                src={`${source.pictureSrc}?${source.hash}`}
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
