import React from 'react';
import './Settingpage.css';


function Settingpage(props) {

const settingpageclose = () => {
    var text = document.getElementsByClassName('settingpage');
    for (var i = 0; i < text.length; i ++) {
        text[i].style.display = 'none';
    }
}




return (
    <div className="">
    <div className="settingpage text-danger" style={{display:'none'}}>
        <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={settingpageclose} className="createroomclose" />

        
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://bd.freeli.io/images/basicAssets/BackArrow.svg" onClick={settingpageclose}
                         className="backicon" />

                    <div className="" style={{fontSize :"25px"}}>Rajon Hossain_903494</div>
                     <br/><br/>
                    <div className="inputsite">
                        <span>Display Name (*)</span><br/>
                        <input type="" className="createinput"/><br/>

                        <span>User Name</span><br/>
                        <input type="" className="createinput"/><br/>

                        <span>Email Address</span><br/>
                        <input type="" className="createinput"/><br/>

                    </div>

                </div>
                <div className="col-md-6 rightsite">
                    <br/><br/><br/><br/>

                    <span>Set an Avatar</span><br/>
                    <img src="https://wfss001.freeli.io/profile-pic/Photos/img.png" className="userimage"/> &nbsp; &nbsp; &nbsp;
                    <button type="button" className="btn btn-dark">Change</button> &nbsp; &nbsp;
                    <button type="button" className="btn btn-danger bg-danger">Remove</button>
                    <br/><br/><br/><br/>

                    <span>Caller ID</span><br/>
                    <input type="" className="createinput" value={'https://bd.freeli.io/call/7732bd10-401b-11ea-8ee4-dd2f2623c99c_personal'}/><br/>
                </div>
            </div>
        </div>

    </div>
    </div>
);
}
export default Settingpage;