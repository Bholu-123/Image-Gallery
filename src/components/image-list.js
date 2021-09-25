import React from 'react';
import styled from 'styled-components';
import './image-list.css'

const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

export const ImageList = ({ image }) => {
    return(
        <div className="container">
            <Img key={image.id} src={image.urls.thumb} alt="" />
            <div className="content">
                <div className="heading">
                    {image.users.bio}
                </div>
                <ul>
                    <li className="items">
                        <strong>Users: </strong>
                        {image.user.first_name}
                    </li>

                    <li className="items">
                        <strong>Views: </strong>
                        {image.views}
                    </li>

                    <li className="items">
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li className="items">
                        <strong>Likes: </strong>
                        {image.total_likes}
                    </li>
                </ul>
            </div>
       </div>
    )
  
}
