import React from 'react';
import './Createroom.css';


function Createroom(props) {


return (
    <div className="">
    <div className="createroompage text-danger" style={{display:'none'}}>
        <img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={props.createroomclose} className="createroomclose" />


        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://bd.freeli.io/images/basicAssets/BackArrow.svg" onClick={props.createroomclose}
                         className="backicon" />

                    <div className="" style={{fontSize :"25px"}}>Create a Room</div>
                    <div className="bodycreate">
                        <input type="radio" id="huey" name="drone" value="huey" checked/>&nbsp;
                            <label>Work Room</label> &nbsp; &nbsp;
                        <input type="radio" id="huey" name="drone" value="huey" checked/>&nbsp;
                        <label htmlFor="huey">Support Room </label>
                    </div>
                    <div className="inputsite">
                        <span>Work Category (*)</span><br/>
                        <input type="" className="createinput"/><br/>

                        <span>Title of Room (*)</span><br/>
                        <input type="" className="createinput"/><br/>

                        <span>Team (*)</span><br/>
                        <input type="" className="createinput"/><br/>

                        <span>Invite Member(s) to this Room</span><br/>
                        <input type="" className="createinput"/><br/>

                        <span>Room Member(s)</span><br/>
                        <input type="" className="createinput"/><br/>
                    </div>

                </div>
                <div className="col-md-6 rightsite">
                    <span>Set an Avatar</span><br/>
                </div>
            </div>
        </div>

    </div>
    </div>
);
}
export default Createroom;