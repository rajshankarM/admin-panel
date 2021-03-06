import React from 'react';
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
  return (
       <div className="widgetSm">
           <span className="widgetSmTitle">New Join Members</span>
           <ul className="widgetSmList">
               <li className="widgetSmListItem">
                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Shankar</span>
                       <span className="widgetSmUserTitle">Developer</span>
                   </div>
                   <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/>
                       Display
                   </button>
               </li>
               <li className="widgetSmListItem">
                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Shankar</span>
                       <span className="widgetSmUserTitle">Developer</span>
                   </div>
                   <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/>
                       Display
                   </button>
               </li>
               <li className="widgetSmListItem">
                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Shankar</span>
                       <span className="widgetSmUserTitle">Developer</span>
                   </div>
                   <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/>
                       Display
                   </button>
               </li>
               <li className="widgetSmListItem">
                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Shankar</span>
                       <span className="widgetSmUserTitle">Developer</span>
                   </div>
                   <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/>
                       Display
                   </button>
               </li>
               <li className="widgetSmListItem">
                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">Shankar</span>
                       <span className="widgetSmUserTitle">Developer</span>
                   </div>
                   <button className="widgetSmButton">
                       <Visibility className="widgetSmIcon"/>
                       Display
                   </button>
               </li>
           </ul>
       </div>
       );
}
