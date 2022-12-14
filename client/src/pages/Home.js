import React from 'react';
import { useQuery } from '@apollo/client';
import ReviewsList from '../components/ReviewsList';
// import ReviewForm from '../components/ReviewForm';
import { QUERY_REVIEWS } from '../utils/queries';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ScareSound from '../assets/mp3/dark-sitar-7546.mp3';
import Switch from '@mui/material/Switch';

import MapContainer from '../components/MapContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#a3bed6',
      darker: '#053e85',
    },
    neutral: {
      main: '#010914',
      contrastText: '#a3bed6',
    },
  },
});



const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

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

      <button onClick={playEffect} className='sound-btn'>
        Enter at your own risk...
      </button>

      <button onClick={pauseEffect} className='sound-btn'>
        Make it stop, I'm too scared!
      </button>


      <ReviewsList reviews={reviews}
        title="Some Feed for Review(s)..." />

    </div>

  );
};

export default Home;
