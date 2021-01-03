import React from 'react';
import './Chacklistpage.css';


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

function Chacklistpage() {

return (
    <div className="container-fluid">
        <div className="row">
            {
                car.map((data)=> {
                    return <div className="col-md-6 cards">
                            <div className="card">
                                <img src="https://wfss001.freeli.io/profile-pic/Photos/img.png" className="chacklistuserimage" />
                                <div className="chacklisttext">
                                    <div className="chacklistuser">{data.username}</div>
                                    <div className="chacklisttime">Created on 15-07-2020 02:08 pm</div>

                                    <img src="https://bd.freeli.io/images/flaticon/incompleteChecklist_black.svg" className="chacklistarrowtexticon"/>
                                    <div className="Text">Chacklist Text</div>
                                    <br/>
                                    <div className="Textdiv">All Pending(5)|My pending(0)|</div>
                                    <div className="Textdiv">My Response Required(0)|Over Due(0)</div>
                                </div>
                            </div>
                        </div>
                })
            }

        </div>
    </div>
);
}
export default Chacklistpage;
