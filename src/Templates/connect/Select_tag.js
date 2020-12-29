import React, { useState, useEffect } from 'react';
import './Select_tag.css';


function Select_tag(props) {
    const [addtaglist, setAddtaglist] = useState([]);

//
const tagfilefunctionclose = () => {

   var text = document.getElementsByClassName('Select_tag');
   for (var i = 0; i < text.length; i ++) {
      text[i].style.display = 'none';
   }
}

const adddata = () => {
    var tag = document.getElementById("tagadd").value;
    if(tag != ''){
            var stortag = JSON.parse(localStorage.getItem("stortag") || "[]");
            stortag.push({id:new Date().toLocaleTimeString(), name:tag});
            localStorage.setItem("stortag", JSON.stringify(stortag));

            // var dd = JSON.parse(localStorage.getItem("stortag") );
            // setAddtaglist(dd);
        }
    document.getElementById("tagadd").value = '';
}


    useEffect(() => {
        var dd = JSON.parse(localStorage.getItem("stortag"));
        setAddtaglist(dd);
    });

    const selecttag = (e, index) => {
        document.getElementById("tagadd").value = e.name;
    }







return (
    <div className="Select_tag" style={{display:'none'}}>
         <span type="button" onClick={tagfilefunctionclose} className="exit">&times;</span>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                   aria-controls="home" aria-selected="true">My Tag(s)</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                   aria-controls="profile" aria-selected="false">Shared with me</a>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <br/><input type="text" id="tagadd" className="searchtagnewone" placeholder="Search tag or add a new one"/><br/><br/>


                <div className="headoflist">
                    {
                        addtaglist.map((item, index) => {
                            return <div className="">

                            <div onClick={() => selecttag(item, index)} className="list">
                                <div className="tik"><input type="checkbox" id="vehicle1" value="Bike"/> &nbsp; </div>
                                <div className="">{item.name}</div>
                            </div>
                            </div>
                        })
                    }
                </div>


                <div className="add">
                    <button type="button" onClick={tagfilefunctionclose} className="btn btn-primary">Cancel</button>&nbsp;
                    <button type="button" className="btn btn-primary" onClick={adddata}>Add</button>
                    {/*<button type="button" className="btn btn-primary">Cancel</button>&nbsp;*/}
                    {/*<button type="button" className="btn btn-primary">Submit</button>*/}
                </div>
                <br/><br/>
            </div>



            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <br/><input type="text" className="searchtagnewone" placeholder="Search tag or add a new one"/>
                sadfasdf
            </div>
        </div>
   </div>
);
}
export default Select_tag;