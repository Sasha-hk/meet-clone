import type { NextPage } from 'next';

import Button, { LeaveButton } from './Button';
import styles from './Menu.module.css';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import PanToolIcon from '@mui/icons-material/PanTool';
import AirplayIcon from '@mui/icons-material/Airplay';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CategoryIcon from '@mui/icons-material/Category';

const Menu: NextPage<{
  meetingName: string
}> = ({ meetingName }) => {
  return (
    <div className={styles.menu}>
      <span>{meetingName}</span>

      <div className={styles.middleFunctions}>
        <Button><KeyboardVoiceIcon /></Button>

        <Button><VideocamIcon /></Button>

        <Button hideOnPhone={true}><ClosedCaptionIcon /></Button>

        <Button hideOnPhone={true}><PanToolIcon /></Button>

        <Button hideOnPhone={true}><AirplayIcon /></Button>

        <Button><MoreVertIcon /></Button>

        <LeaveButton />
      </div>

      <div className={styles.infoBlock}>
        <InfoOutlinedIcon />

        <PeopleOutlinedIcon />

        <ChatOutlinedIcon />

        <CategoryIcon />
      </div>
    </div>
  )
};

export default Menu;
