import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ClosedCaptionOutlinedIcon from '@mui/icons-material/ClosedCaptionOutlined';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

import MenuButton from './BottomMenu/Button';
import styles from './BottomMenu/Button.module.css';

const Menu: NextPage<any> = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <MenuButton
            className={styles.button}
            {...bindTrigger(popupState)}
          >
            <MoreVertIcon />
          </MenuButton>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
              <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      alert('Дошка для конференцій')
                    }}
                  >
                    <ListItemIcon>
                      <BorderColorOutlinedIcon />
                    </ListItemIcon>

                    <ListItemText>Дошка для конференцій</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Записувати зустріч')
                    }}
                  >
                    <ListItemIcon>
                      <RadioButtonCheckedOutlinedIcon />
                    </ListItemIcon>

                    <ListItemText>Записувати зустріч</ListItemText>
                  </MenuItem>

                  <Divider />


                  <MenuItem
                    onClick={() => {
                      alert('Змінити макет')
                    }}
                  >
                    <ListItemIcon>
                      <GridViewOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Змінити макет</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Повноекранний режим')
                    }}
                  >
                    <ListItemIcon>
                      <FullscreenOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Повноекранний режим</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Застовувати візуальні ефекти')
                    }}
                  >
                    <ListItemIcon>
                      <AutoAwesomeIcon />
                    </ListItemIcon>
                    <ListItemText>Застовувати візуальні ефекти</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Увімкнути субтитри')
                    }}
                  >
                    <ListItemIcon>
                      <ClosedCaptionOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Увімкнути субтитри</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Використовувати телефон для передачі звуку')
                    }}
                  >
                    <ListItemIcon>
                      <PhoneForwardedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="inherit" noWrap>
                        Використовувати телефон для передачі звуку
                      </Typography>
                    </ListItemText>
                  </MenuItem>

                  <Divider />

                  <MenuItem
                    onClick={() => {
                      alert('Повідомити про проблему')
                    }}
                  >
                    <ListItemIcon>
                      <FeedbackOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="inherit" noWrap>
                        Повідомити про проблему
                      </Typography>
                    </ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Повідомити про порушення')
                    }}
                  >
                    <ListItemIcon>
                      <ReportGmailerrorredOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="inherit" noWrap>
                        Повідомити про порушення
                      </Typography>
                    </ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Вирішення проблем і довідка')
                    }}
                  >
                    <ListItemIcon>
                      <QueryStatsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="inherit" noWrap>
                        Вирішення проблем і довідка
                      </Typography>
                    </ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      alert('Повноекранний режим')
                    }}
                  >
                    <ListItemIcon>
                      <FullscreenOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Повноекранний режим</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default Menu;
