import React, { useState, useEffect } from 'react';
import { ImageList } from './components/image-list';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'; 
import axios from 'axios';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  })

  const fetchImages = async(count = 100) => {
    const rootApi="https://api.unsplash.com";
    const accessKey="i7WqfApMfUfln9sID147IksLzpEW4cGB9RIZqTCSxV0";

    const response = await axios.get(`${rootApi}/search/photos?client_id=${accessKey}&count=${count}`)
    console.log(response.data);
    setImage([...images, ...response.data]);
  }


  return (
    <div>
      <GlobalStyle />
        <WrapperImages>
          {images.map(image => (
            <ImageList image={image} key={image.id} />
          ))}
        </WrapperImages>
    </div>
  );

}

export default App;
