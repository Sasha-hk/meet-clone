import type { NextPage } from 'next';

import PeopleView from './PeopleView';
import styles from './PeoplesView.module.css';
import { randomBoolean } from '../../../src/utils/random';
import { useEffect, useState } from 'react';

const PeoplesView: NextPage = () => {
  const [peopleViews, setPeopleViews]: any = useState([]);

  useEffect(() => {
    const views: Array<any> = [];

    for (let i = 0; i < 12; i++) {
      views.push(<PeopleView
        key={i}
        src={process.env.NEXT_PUBLIC_API_URL + '/random-image'}
        name={'User ' + i}
        mute={randomBoolean()}
        talking={randomBoolean()}
      />);
    }

    setPeopleViews(views);
  }, []);

  return (
    <div className={[styles.gridView].join(' ')}>
      {peopleViews}
    </div>
  )
};

export default PeoplesView;
