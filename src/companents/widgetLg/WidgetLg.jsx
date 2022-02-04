import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
       <div className="widgetLg">
           <h3 className="widgetLgTitle">Latest Transaction</h3>
           <table className="widgetLgTable">
             <tr className="widgetLgTr">
               <th className="widgetLgTh">Customer</th>
               <th className="widgetLgTh">Date</th>
               <th className="widgetLgTh">Amount</th>
               <th className="widgetLgTh">Status</th>
             </tr>
             <tr className="widgetLgTr">
               <td className="widgetLgUser">
                 <img src="http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">Praneetha</span>
               </td>
               <td className="widgetLgDate">2 Jan 2022</td>
               <td className="widgetLgAmount">$122.00</td>
               <td className="widgetLgStatus"><Button type="Approved"/></td>
             </tr>
             <tr className="widgetLgTr">
               <td className="widgetLgUser">
                 <img src="http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">Praneetha</span>
               </td>
               <td className="widgetLgDate">2 Jan 2022</td>
               <td className="widgetLgAmount">$122.00</td>
               <td className="widgetLgStatus"><Button type="Declined"/></td>
             </tr>
             <tr className="widgetLgTr">
               <td className="widgetLgUser">
                 <img src="http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">Praneetha</span>
               </td>
               <td className="widgetLgDate">2 Jan 2022</td>
               <td className="widgetLgAmount">$122.00</td>
               <td className="widgetLgStatus"><Button type="Pending"/></td>
             </tr>
             <tr className="widgetLgTr">
               <td className="widgetLgUser">
                 <img src="http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">Praneetha</span>
               </td>
               <td className="widgetLgDate">2 Jan 2022</td>
               <td className="widgetLgAmount">$122.00</td>
               <td className="widgetLgStatus"><Button type="Approved"/></td>
             </tr>

           </table>
       </div>
       );
}
