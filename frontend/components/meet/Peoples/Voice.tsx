import type { NextPage } from 'next';

import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const Microphone: NextPage<any> = ({ mute, talking, ...props }) => {
  if (mute) {
    return (<VolumeOffIcon {...props} />);
  }

  if (talking) {
    return (<GraphicEqIcon {...props} />);
  }

  return (
    <></>
  );
};

export default Microphone;
