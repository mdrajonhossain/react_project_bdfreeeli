import Header from './Header';
import './Home.css';
import './Homedataname.css';
import React,{ useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import Chacklisttap from "./Chacklisttap";
import Teamtasks from "./Teamtasks";
import Uploatedpate from "./Uploatedpate";
import Directmessage from "./Directmessage";
import Datar from "./Datar";
import Imagepage from "./Media/Imagepage";
import Videopage from "./Media/Videopage";
import Filepage from "./Media/Filepage";
import Profile from "./Profile";
import Settingpage from "./Setting/Settingpage";
import Userroominput from "./Userroominput";
import Chathovertag from "./Chathovertag";
import Select_tag from "./Select_tag";
import Chacklistpage from "./Chacklistpage";



var car = [   
   {username:"MD Maruf Hasan", model:"500", color:"white"},
   {username:"Himel Talukder", model:"500", color:"white"},
   {username:"AH Nayeem", model:"500", color:"white"},
   {username:"Alamgir Hossain", model:"500", color:"white"},
   {username:"Manzurul  Alam", model:"500", color:"white"},
   {username:"Jahirul Islam", model:"500", color:"white"},
   {username:"Dalim Chowdhur", model:"500", color:"white"},
   {username:"Ali  Azam", model:"500", color:"white"},
   {username:"SM Jubayer", model:"500", color:"white"},
   {username:"Kallol Ray94", model:"500", color:"white"},
   {username:"TestUser Jahirul", model:"500", color:"white"},
   {username:"x1 demo", model:"500", color:"white"},
   {username:"User Demo", model:"500", color:"white"},
   {username:"Rajon", model:"500", color:"white"},
   {username:"Demo1", model:"500", color:"white"},
   {username:"Demo2", model:"500", color:"white"}
];

function Home(props) {

   const [items, setItems] = useState([]);
   const [message, setMessage] = React.useState("");

   const [onhoveruser, setOnhoveruser] = useState(true);
   // const [conversationadd, setConversationadd] = useState(false);

   const [chacklista, setChacklista] = useState(false);
   const [teamtasks, setTeamtasks] = useState(false);
    const [filupload, setFilupload] = useState(false);
    const [searchbox, setSearchbox] = useState(false);

    const [filepage, setFilepage] = useState(true);

 function handleChangee(ev) {
    
   setMessage(
          {
            mse: ev.target.value,
            id:Date.now(),
            time : new Date().toLocaleTimeString(),
            date : new Date().toLocaleDateString()
        });
    }
 
 
   // const monthNames = ["January", "February", "March", "April", "May", "June",
   //    "July", "August", "September", "October", "November", "December"
   // ];

   // const d = new Date();
   // document.write("The current month is " + monthNames[d.getMonth()]);

    // document.getElementById("myBtn").addEventListener("click", myFunction);

    // useEffect(() => {

    // });

function activateLasers(event) {
  event.preventDefault();

  if(message.mse != ''){

   setItems([...items, {id:message.id, mse: message.mse, date:message.date, time:message.time}]);
  }
   setMessage({mse:""});





};

   // function conversationaddmedthod() {
   //    // setConversationadd(!conversationadd)
   //     alert("sdfsdf")
   // }


    function teamtasksfunction() {
        setTeamtasks(!teamtasks)

    }

   function chacklistafunction() {
        setChacklista(!chacklista)
        // alert("chacklistafunction")
    }

    function uploadfilefunction() {
        setFilupload(!filupload)
    }

    function voicecall() {
        var myWindow = window.open("https://bd.freeli.io/call/7732bd10-401b-11ea-8ee4-dd2f2623c99c_personal", "", "width=600,height=400");
    }

    function videocall() {
        var myWindow = window.open("", "", "width=600,height=400");
    }

    function searsing() {
        var text = document.getElementsByClassName('voice_callicon');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
        var text = document.getElementsByClassName('tt');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
        // setSearchbox(!searchbox)

        var text = document.getElementsByClassName('conversationsearch');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }

    }









    function searsingslose() {
        var text = document.getElementsByClassName('conversationsearch');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
        var text = document.getElementsByClassName('voice_callicon');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
        var text = document.getElementsByClassName('tt');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
    }

    function filepagee() {
        setFilepage(!filepage)
    }


    const userroom = () => {
        var text = document.getElementsByClassName('topsearch');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }

        var text = document.getElementsByClassName('searchuserroom');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
    }

    const profiletab = () => {
        var text = document.getElementsByClassName('profilecss');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
    }

    const settingpage = () => {
        var text = document.getElementsByClassName('settingpage');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
    }



    const useview = (e) => {

        document.getElementById("userquary").innerText =e.username;
    }


    const Chacklist = () => {
        var text = document.getElementsByClassName('voice_callicon');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
        var text = document.getElementsByClassName('tt');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }

        var text = document.getElementsByClassName('chacklistmanubar');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }

        var text = document.getElementsByClassName('buttomchatinput');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }

        var text = document.getElementsByClassName('chackpage');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }

        var text = document.getElementsByClassName('chatmaplist');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }
    }


    const chacklistclosebutton = ()=> {
        var text = document.getElementsByClassName('voice_callicon');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
        var text = document.getElementsByClassName('tt');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }

        var text = document.getElementsByClassName('chacklistmanubar');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }

        var text = document.getElementsByClassName('buttomchatinput');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }

        var text = document.getElementsByClassName('chackpage');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'none';
        }

        var text = document.getElementsByClassName('chatmaplist');
        for (var i = 0; i < text.length; i ++) {
            text[i].style.display = 'block';
        }
    }




return (
<div className="">
   <Header/>

   <div className="Dataname" style={{ display: chacklista ? 'block' : 'none' }}>
       <Chacklisttap/>
       <br/>
       <div className='btncnsub'>
            <button onClick={chacklistafunction} className="btn">Cancel</button> &nbsp;
           <button className="btn" type="submit">Submit</button>

       </div>
   </div>

    <div className="Dataname" style={{ display: teamtasks ? 'block' : 'none' }}>
        <Teamtasks/>
        <br/>
        <div className='btncnsub'>
            <button onClick={teamtasksfunction} className="btn">Cancel</button> &nbsp;
            <button className="btn" type="submit">Submit</button>

        </div>
    </div>



    <div className="filupload" style={{ display: filupload ? 'block' : 'none' }}>
        <div onClick={uploadfilefunction} className="close">&times;</div>
        <Uploatedpate/>
    </div>


   <div className="sitebar">
      <div className="s_topbar">
         <nav className="navbar navbar-light">
            <a className="navbar-brand">
            <img src="https://bd.freeli.io/images/basicAssets/conv-i-new-bb.png" className="site_top" />
            </a>

             <Userroominput/>

            <form className="form-inline topsearch">
                <img  src="https://bd.freeli.io/images/basicAssets/search_icon_for_todo_chat.svg" onClick={userroom} className="site_top"/>
                <img src="https://bd.freeli.io/images/basicAssets/NotFlagged.svg" className="site_top"/>
                <img src="https://bd.freeli.io/images/basicAssets/activeSvg/newMessageHovAc.svg" className="site_top"/>
                <img src="https://bd.freeli.io/images/basicAssets/ChatFilter.svg" className="site_top"/>
            </form>
         </nav>
      </div>

      <div className="user_list">
         {/*<ul>*/}
         {/*   <li id="cc" style={{color: '#fcd65f'}}>WorkFreeli Notification(s)</li>*/}
         {/*   <span style={{fontSize:'20px', lineHeight:'60px',marginLeft:'-20px'}}>Pinned</span>*/}
         {/*   <li>Md. Rajon Hossain</li>*/}
         {/*   <span class="conversations">Conversations(s)</span> &nbsp;*/}
         {/*   <img src="https://bd.freeli.io/images/basicAssets/conv-i-new-bb.png" className="site_top" />*/}

             <Datar/>

         {
               car.map(item => {
                  return <ul>
                              <div className="userhover" ><li onClick={()=> useview(item)}>{item.username}</li></div>
                           </ul>
               })
           }


      </div>
   </div>



    <div className="rightbare" style={{ display: filepage ? 'none' : 'block' }}>
            <Filepage
                filepagee={filepagee}
            />
    </div>


    <Profile/>


   <div className="rightbare" style={{ display: filepage ? 'block' : 'none' }}>
      <div className="rightsitetopbar">

          {/*=====================*/}
          <nav className="navbar navbar-expand-lg">
              <img src="https://wfss001.freeli.io/profile-pic/Photos/img.png" className="userimage"/>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <div className='username' onClick={profiletab}><b id="userquary">User 904994</b></div>
                      </li>
                      <li className="nav-item voice_callicon" style={{display:'block'}}>
                          <span className="leftline"></span>
                          <img onClick={voicecall} src="https://bd.freeli.io/images/basicAssets/voice_call_for_active.svg" className="voice_call"/>
                          <img onClick={videocall} src="https://bd.freeli.io/images/basicAssets/video_call_for_active.svg" className="voice_call"/>
                          <img src="https://bd.freeli.io/images/basicAssets/custom_not_pin.svg" className="voice_call"/>
                          <img src="https://bd.freeli.io/images/basicAssets/Flagged.svg" className="voice_call"/>
                          <img src="https://bd.freeli.io/images/basicAssets/search_icon_for_todo_chat.svg" onClick={searsing} className="voice_call"/>
                          <img src="https://bd.freeli.io/images/basicAssets/activeSvg/more_menuActive.svg" onClick={searsing} className="voice_call"/>
                          <span className="leftline"></span>
                      </li>
                      <li className="nav-item tt" style={{display:'block'}}>
                          <a className="nav-link filetabmanu" onClick={filepagee}>Dossier</a>
                      </li>
                      <li className="nav-item voice_callicon" style={{display:'block'}}>
                          <span className="leftline"></span>
                      </li>
                      <li className="nav-item tt" style={{display:'block'}}>
                          <a className="nav-link Chacklist" onClick={Chacklist}>Chacklist</a>
                      </li>
                      <li className="nav-item conversationsearch"  style={{display:'none'}}>
                          <div className="Conversation">Conversation</div>
                          <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" className="closing" onClick={searsingslose}/>
                          <input type="text" className="searche" />
                      </li>

                      <li className="nav-item voice_callicon chacklistmanubar"  style={{display:'none'}}>
                          <span className="leftline"></span>
                          <img src="https://bd.freeli.io/images/flaticon/incompleteChecklist_black.svg" className="chacklisticon"/>
                          <span className="leftline"></span>
                          <img src="https://bd.freeli.io/images/flaticon/incompleteChecklist_black.svg" className="chacklisticon"/>
                          <span className="leftline"></span>
                          <img src="https://bd.freeli.io/images/flaticon/incompleteChecklist_black.svg" className="chacklisticon"/>
                          <span className="leftline"></span>
                          <img src="https://bd.freeli.io/images/flaticon/incompleteChecklist_black.svg" className="chacklisticon"/>
                          <span className="leftline"></span>
                          <img src="https://bd.freeli.io/images/basicAssets/Flagged.svg" className="chacklisticon"/>


                          <input type="text" className="chacklistmanubarinput" placeholder="Type and enter to search checklist"/>
                          <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={chacklistclosebutton}className="chacklistclosebutton"/>
                      </li>

                  </ul>
              </div>
          </nav>

          {/*=====================*/}





          {/*<div className="condropdown" style={{ display: searchbox ? 'block' : 'none' }}>*/}
          {/*    <div className="dropdown">*/}
          {/*      <span id="dropdownMenuButton" data-toggle="dropdown">*/}
          {/*          <img src="https://bd.freeli.io/images/basicAssets/search_icon_for_todo_chat.svg" className="searchicon"/>*/}
          {/*          <span>Conversation</span>*/}
          {/*      </span>*/}

          {/*        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>Message tag(s)</a>*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>Image(s)</a>*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>Vedio(s)</a>*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>Audio(s)</a>*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>File(s)</a>*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>Link(s)</a>*/}
          {/*            <a className="dropdown-item" href="#" onClick={filepagee}>View By Tag(s)</a>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}



          {/*<img src="https://bd.freeli.io/images/basicAssets/close_button.svg" className="closing"*/}
          {/*     style={{ display: searchbox ? 'block' : 'none' }} onClick={searsingslose}/>*/}
          {/*<ContentEditable*/}
          {/*    className="searche"*/}
          {/*    style={{ display: searchbox ? 'block' : 'none' }}/>*/}

          {/*<ContentEditable*/}
          {/*    className="searche"*/}
          {/*    // innerRef={contentEditable}*/}
          {/*    html={''} // innerHTML of the editable div*/}
          {/*    disabled={false}*/}
          {/*    // onChange={this.handleChange} // handle innerHTML change*/}
          {/*    tagName='article' // Use a custom HTML tag (uses a div by default)*/}
          {/*    style={{ display: searchbox ? 'block' : 'none' }}*/}
          {/*/>*/}

              {/*<div className="ss" >*/}
              {/*    <span className="leftline">*/}
              {/*      <img onClick={voicecall} src="https://bd.freeli.io/images/basicAssets/voice_call_for_active.svg" className="voice_call"/>*/}
              {/*      <img onClick={videocall} src="https://bd.freeli.io/images/basicAssets/video_call_for_active.svg" className="voice_call"/>*/}
              {/*      <img src="https://bd.freeli.io/images/basicAssets/custom_not_pin.svg" className="voice_call"/>*/}
              {/*      <img src="https://bd.freeli.io/images/basicAssets/Flagged.svg" className="voice_call"/>*/}
              {/*      <img src="https://bd.freeli.io/images/basicAssets/search_icon_for_todo_chat.svg" onClick={searsing} className="voice_call"/>*/}


              {/*          <span className="dropdown">*/}
              {/*              <img src="https://bd.freeli.io/images/basicAssets/MoreMenu.svg" id="dropdownMenuButton" data-toggle="dropdown" className="voice_call"/>*/}
              {/*                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
              {/*                    <a className="dropdown-item" href="#">Select Message</a>*/}
              {/*                    <a className="dropdown-item" href="#">Mute Notifications</a>*/}
              {/*                    <a className="dropdown-item" href="#">Set Notification Tune</a>*/}
              {/*                    <a className="dropdown-item" href="#">Filter</a>*/}
              {/*                    <a className="dropdown-item" href="#">Clear Message(s)</a>*/}
              {/*                </div>*/}


              {/*           <span className="leftline">*/}
              {/*              <span onClick={filepagee}>&nbsp;Files&nbsp;</span>*/}
              {/*           </span>*/}
              {/*           <span className="leftline">*/}
              {/*               <span>Chacklist</span> &nbsp; &nbsp;*/}
              {/*               <span className="top03">0/3</span>*/}
              {/*           </span>*/}
              {/*           </span>*/}
              {/*    </span>*/}
              {/*</div>*/}
      </div>

<Settingpage/>
      <div className="chagespeach" id="chagespeach">
          <div className="chatmaplist">
           {
               items.map(item => {
                  return <div className="">
                     <hr />
                     <div className="today">Today {item.time}</div>
                     <div className="chateloop">
                        <img src="https://wfss001.freeli.io/profile-pic/Photos/img.png" className="textuserpic" />
                              <div className="mapusersite">
                                 <span className="username" onClick={settingpage}>Md. Rajon Hossain&nbsp;</span>
                                 <span className="details">Created on {item.date} {item.time}<i> - Delivered </i> </span>
                              </div>
                              <Chathovertag uploadfilefunction={uploadfilefunction} />
                              <Select_tag/>
                              <br/>
                              <div className="userhovertagleft">{item.mse}</div>
                        </div>
                  </div>
               })
           }
          </div>


          <div className="chackpage" style={{display:'none'}}>
              {/*component add*/}
              <Chacklistpage/>
          </div>


      </div>

   </div>
        {/*{conversationadd ?*/}
        {/*    <div className="conversationcss" style={{ display: conversationadd ? 'block' : 'none' }}>*/}
        {/*        <Directmessage name="Sara"*/}
        {/*           setConversationadd= {setConversationadd}*/}
        {/*           Conversationtab={conversationadd}/>*/}
        {/*   </div>*/}
        {/*: ""}*/}
    <div className="buttomchatinput">
            <div className="inputareia" style={{ display: filepage ? 'block' : 'none' }}>
                 <img src="https://bd.freeli.io/images/basicAssets/conv-i-new-bb.png" className="textleftsite" />
                 <ContentEditable
                    html={message.mse}
                    className="chate"
                    onChange={handleChangee}
                    contentEditable='true'/>
            </div>

        <div className="submitcacklist" style={{ display: filepage ? 'block' : 'none' }}>
             <img onClick={teamtasksfunction} src="https://bd.freeli.io/images/basicAssets/checklist_blue.svg" className="inputsymble" /> &nbsp;
             <img onClick={chacklistafunction} src="https://bd.freeli.io/images/basicAssets/hayven_checked.svg" className="inputsymble" style={{ border: '1px solid #023d67', borderRadius: '25px' }} /> &nbsp;
             <img onClick={uploadfilefunction} src="https://bd.freeli.io/images/basicAssets/activeSvg/attachActive.svg" className="inputsymble" /> &nbsp;
             <img src="https://bd.freeli.io/images/basicAssets/activeSvg/addEmojiActive.svg" className="inputsymble" /> &nbsp;
             <img onClick={activateLasers} src="https://bd.freeli.io/images/basicAssets/circle_up_arrow.svg" className="inputsymble" id='inputsymble' />&nbsp; &nbsp;
        </div>
    </div>
</div>
);
}
export default Home;