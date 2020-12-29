import React, { useState, useEffect } from 'react';
import './Chathovertag.css';



function Chathovertag(props) {





const tagfilefunction = () => {
   var text = document.getElementsByClassName('Select_tag');
   for (var i = 0; i < text.length; i ++) {
      text[i].style.display = 'block';
   }

}

return (
    <div className="hovertag">
       <img src="https://bd.freeli.io/images/basicAssets/AddEmoji.svg" className="hovericon" />
       <img src="https://bd.freeli.io/images/basicAssets/NotFlagged.svg" className="hovericon" />
       <img src="https://bd.freeli.io/images/basicAssets/thread.svg" className="hovericon" />
       <img src="https://bd.freeli.io/images/basicAssets/shareHayvenPrimary.svg" className="hovericon" />
       <img src="https://bd.freeli.io/images/basicAssets/Attach.svg" onClick={props.uploadfilefunction} className="hovericon" />
       <img src="https://bd.freeli.io/images/basicAssets/select_tag.svg" onClick={tagfilefunction} className="hovericon" />
       <img src="https://bd.freeli.io/images/flaticon/editmsg.svg" className="hovericon" />
       <img src="https://bd.freeli.io/images/basicAssets/MoreMenuMsg.svg" id="dropdownMenuButton" data-toggle="dropdown"
            className="hovericon" />

       <div className="dropdown dropdowns">
          <div className="dropdown-menu mousright" aria-labelledby="dropdownMenuButton">
             <a className="dropdown-item " href="#">Convert to task</a>
             <a className="dropdown-item " href="#">Select Message</a>
             <a className="dropdown-item  text-danger" href="#">Delete Message</a>
          </div>
       </div>





   </div>
);
}
export default Chathovertag;