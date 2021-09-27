import React, { useState, useEffect } from 'react';
import { ImageList } from './components/image-list';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'; 
import axios from 'axios';
import { ImageCard } from './components/image-card';
import './components/search-form.css';

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
  const [selectedImage,setSelectedImage]=useState(null);
  const [searchValue,setSearchValue]=useState(' ');

  useEffect(() => {
    fetchImages();
  },[])

  const fetchImages = async() => {
    const rootApi="http://localhost:5000/products";

    const response = await axios.get(`${rootApi}`)

    setImage([...images, ...response.data.data]);
  }

  // const fetchImages = async(count = 32) => {
  //   const rootApi="https://api.unsplash.com";
  //   const accessKey="DoYfLJ-9Q07-F-wqIdaOpHCZ1-K6WEHv2MRxOmrL47k";

  //   const response = await axios.get(`${rootApi}/search/photos?client_id=${accessKey}&count=${count}`)
  //   console.log(response.data);
  //   setImage([...images, ...response.data]);
  // }

  const handleChange = (e) =>{
     setSearchValue(e.target.value);
  }
  
  const filterCard = () =>{
    return images.filter(img => img.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((image) => (
      <ImageList image={image} key={image._id} setSelectedImage={setSelectedImage}/>
    ))
  }

  if(!selectedImage)
  {
    return(
      <div>
       <form className="searchForm">
         <input type="text" placeholder="search" className="searchBar" onChange={handleChange} value={searchValue}/>
       </form>
       <GlobalStyle />
        <WrapperImages>
          {filterCard()}
        </WrapperImages>
     </div>
    );
  }
  else
  {
    return (
      <div>
          {selectedImage && <ImageCard selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
      </div>
    );
  }
  // return (
  //   <div>
  //     <GlobalStyle />
  //       <WrapperImages>
  //         {images.map((image) => (
  //           <ImageList image={image} key={image._id} setSelectedImage={setSelectedImage}/>
  //         ))}
  //       </WrapperImages>
  //       {selectedImage && <ImageCard selectedImage={selectedImage}/>}
  //   </div>
  // );

}

export default App;
