import React from 'react';
import { useQuery } from '@apollo/client';
import ReviewsList from '../components/ReviewsList';
// import ReviewForm from '../components/ReviewForm';
import { QUERY_REVIEWS } from '../utils/queries';

import ScareSound from '../assets/mp3/dark-sitar-7546.mp3';

import MapContainer from '../components/MapContainer';


const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  const darkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  var scareEffect = document.getElementById('scare-sound');
  // .autoplay;
  // document.getElementById('demo').innerHTML = scareEffect;
  const playEffect = () => {
    scareEffect.play();
  }
  const pauseEffect = () => {
    scareEffect.pause();
  }

  return (

    <div className=''>

      {/* <audio id='scare-sound' autoplay> */}
      <audio id='scare-sound'>
        <source src={ScareSound} type='audio/mp3'></source>
      </audio>

      <button onClick={playEffect} type="button" className='sound-btn'>
        Enter at your own risk...
      </button>

      <button onClick={pauseEffect} type="button" className='sound-btn'>
        Make it stop, I'm too scared!
      </button>

      {/* <p id="demo"></p> */}

      <button onClick={darkMode} className='darkmode-btn'>Enable dark mode</button>

      <ReviewsList reviews={reviews}
        title="Some Feed for Review(s)..." />

    </div>


  );
};

export default Home;
