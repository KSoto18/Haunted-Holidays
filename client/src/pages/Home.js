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

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
<ThemeProvider theme={theme}>
    <div className=''>

      {/* <audio id='scare-sound' autoplay> */}
      <audio id='scare-sound'>
        <source src={ScareSound} type='audio/mp3'></source>
      </audio>
      <Stack direction="row" spacing={2}>
      <Button  size="small" variant="contained" color="neutral"  onClick={playEffect} type="button" className='sound-btn'>
        Enter at your own risk...
      </Button>

      <Button  size="small" variant="contained" color='primary' font-weight="bold"  onClick={pauseEffect} type="button" className='sound-btn'>
        Make it stop, I'm too scared!
      </Button>

      {/* <p id="demo"></p> */}

   
     </Stack> 
     <Card className="reviewCard"sx={{ background:"black"}}>
     <CardContent >
     <Typography sx={{ fontSize: 20 }}  gutterBottom>
     <ReviewsList  reviews={reviews}
        title="Spooky Sightings!" />
        </Typography>
     
        </CardContent>
</Card>
    </div>

    </ThemeProvider>
  );
};

export default Home;
