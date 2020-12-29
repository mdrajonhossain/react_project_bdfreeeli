import React from 'react';
import './Imagepage.css';



var file = [
    {filename:"image", filesize:"500"},
    {filename:"image2", filesize:"500"},
    {filename:"image3", filesize:"500"},
    {filename:"image4", filesize:"500"},
    {filename:"image5", filesize:"500"},
    {filename:"image6", filesize:"500"},
    {filename:"image7", filesize:"500"},
    {filename:"image4", filesize:"500"},
    {filename:"image5", filesize:"500"},
    {filename:"image6", filesize:"500"},
    {filename:"image7", filesize:"500"},
    {filename:"image8ee", filesize:"500"}
];


function Files() {




    return (
        <div className="">
            <div className="serarchingimage">
                <img src="https://bd.freeli.io/images/basicAssets/file_search.svg" className="imagefile" />
                <img src="https://bd.freeli.io/images/basicAssets/tag_search.svg" className="imagefile" />
                <input type="text" className="imagesearchinput"/> &nbsp; &nbsp;
                <img src="https://bd.freeli.io/images/basicAssets/conv-i-new-bb.png" className="imagefile" />
                <img src="https://bd.freeli.io/images/basicAssets/tag_search.svg" className="imagefile" />
                <img src="https://bd.freeli.io/images/basicAssets/tag_search.svg" className="imagefile" />
            </div>
            <br/>
            <div className="imageloop">
                {
                    file.map(item => {
                        return <div className="">
                            <div className="card">
                                <div className="">
                                    <p className=""><img src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png" className="imagelooppic" /></p>
                                    <p className="card-text"> &nbsp; {item.filename} &nbsp; ({item.filesize}MB)</p>
                                    <p className="cardtext"> &nbsp; Uploaded by AH Nayeem on July 16th 2020 @ 11:28 am</p>
                                    <br/>
                                </div>
                            </div><br/>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
export default Files;