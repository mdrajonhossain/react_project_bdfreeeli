import React, { useState, useEffect } from 'react';

import './Profile.css';


function Profile(props) {

    function profleclose() {
        var text = document.getElementsByClassName('profilecss');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }


    }

    useEffect(() => {
        var x = document.getElementById("userquary").innerText;
        document.getElementById("userquaryrabs").innerHTML = x;
    });


return (
   <div className="profilecss" style={{display:'none'}}>
       {/*<img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick="" className="closing"*/}
       {/*     style={{ display: searchbox ? 'block' : 'none' }} onClick={searsingslose}/>*/}

       <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={profleclose} className="close profileclose" />

            <div className="">Profile</div>

            <div className="proto">
               <img src="https://wfss001.freeli.io/profile-pic/Photos/img.png" className="profilephoto"/>
            </div>
            <div className="textdiv">
               <span className='userquaryrabs' id="userquaryrabs"><h4></h4></span>
               <div className="">rajonhossaindhaka@gmail.com</div>
               <div className="">
                  <img src="https://bd.freeli.io/images/basicAssets/voice_call_for_active.svg" className="profilevoice_call"/>
                  <img src="https://bd.freeli.io/images/basicAssets/video_call_for_active.svg" className="profilevoice_call"/>
                  <img src="https://bd.freeli.io/images/basicAssets/Chat.svg" onClick={profleclose} className="profilevoice_call"/>
               </div>
            </div>

   </div>

);
}
export default Profile;