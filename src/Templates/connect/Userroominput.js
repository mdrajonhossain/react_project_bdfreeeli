import React, { useState, useEffect } from 'react';

import './Userroominput.css';


function Userroominput(props) {

   const userroomclose = () => {
      var text = document.getElementsByClassName('searchuserroom');
      for (var i = 0; i < text.length; i ++) {
         text[i].style.display = 'none';
      }
      var text = document.getElementsByClassName('topsearch');
      for (var i = 0; i < text.length; i ++) {
         text[i].style.display = 'block';
      }
   }




return (
    <div className="searchuserroom" style={{ display: 'none' }}>
       <input type="" placeholder="Search Users or rooms" className="usersearchroominput" />
       <div className="usersearchroominputclose" onClick={userroomclose}>X</div>
   </div>
);
}
export default Userroominput;