import React from 'react';
import './image-details.css';

export const ImageDetails = ({clickCount,description,image,name,setSelectedImage}) =>{

    const handleCLick = (e) =>{
        console.log("clicked");
        setSelectedImage(null);
    }
    return(
        <div className= "DetailsContainer">
            <i class="fas fa-times" onClick={handleCLick}></i>
            <img src={`https://borderfree-products.s3.ap-south-1.amazonaws.com/${image}`} alt="enlarged"></img>
            <ul>
                <li>{description}</li>
                <li>{clickCount}</li>
                <li>{name}</li>
            </ul>
       </div>
    );
}

