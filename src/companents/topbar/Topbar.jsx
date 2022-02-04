import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language , Settings} from '@material-ui/icons';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Topbar() {
  return (
  <div className="topbar">
      <div className="topbarWrapper">
          <div className="topLeft">
              <span className="logo">AdminPanel</span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNone/>
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Language/>
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Settings/>
              </div>
              <img src="https://1.bp.blogspot.com/-VigaSS3QooY/YQtXsh6M7QI/AAAAAAAAVA8/BcrY0tudkVgNSCeYcOhznmOL1EZxzY-VgCLcBGAsYHQ/w629-h640/sad%2Bboy%2BHD%2Bwallpaper%2B%252888%2529.jpg" alt="" className="topAvatar" />
          </div>
      </div>
  </div>
  );
}
