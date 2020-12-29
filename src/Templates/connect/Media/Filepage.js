import React from 'react';
import Imagepage from "./Imagepage";
import Videopage from "./Videopage";
import Audios from "./Audios";
import Files from "./Files";



function Filepage(props) {



    return (
        <div className="">
            <div className="rightsitetopbare">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <img src="https://bd.freeli.io/images/basicAssets/BackArrow.svg" onClick={props.filepagee} className="rightsitetopbarearwo"/>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                           aria-controls="pills-home" aria-selected="true">Images(s)</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                           aria-controls="pills-profile" aria-selected="false">Videos</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-audio-tab" data-toggle="pill" href="#pills-audio" role="tab"
                           aria-selected="false">Audios</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-files-tab" data-toggle="pill" href="#pills-files" role="tab"
                           aria-selected="false">Files</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-link-tab" data-toggle="pill" href="#pills-link" role="tab"
                           aria-selected="false">Links View By Tag(s)</a>
                    </li>
                    <li className="nav-close" role="presentation">
                        {/*<img src="https://bd.freeli.io/images/basicAssets/close_button.svg" onClick={filepagee} className="close" />*/}
                        <span onClick={props.filepagee} className="closee">&times;</span>
                    </li>
                </ul>


                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <Imagepage/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                         aria-labelledby="pills-profile-tab">

                        <Videopage/>

                    </div>
                    <div className="tab-pane fade" id="pills-audio" role="tabpanel"
                         aria-labelledby="pills-audio-tab">
                        <Audios/>

                    </div>
                    <div className="tab-pane fade" id="pills-files" role="tabpanel"
                         aria-labelledby="pills-files-tab">

                        <Files/>

                    </div>
                    <div className="tab-pane fade" id="pills-link" role="tabpanel"
                         aria-labelledby="pills-link-tab">

                        Links View By Tag(s)


                    </div>
                </div>
            </div>
        </div>
    );
}
export default Filepage;