import type { NextPage } from 'next';

import cls from './menu.module.css';

const Menu: NextPage = ({ meetingName }: any) => {
  return (
    <div className={cls.menu}>
      <span>{meetingName}</span>

      <div>

      </div>

      <div>

      </div>
    </div>
  )
};

export default Menu;
