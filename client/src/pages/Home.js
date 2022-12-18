import React from 'react';
import { useQuery } from '@apollo/client';
import ReviewsList from '../components/ReviewsList';
// import ReviewForm from '../components/ReviewForm';
import { QUERY_REVIEWS } from '../utils/queries';
import { RiGhost2Line } from 'react-icons/ri';
import { GiDarkSquad, GiHaunting } from 'react-icons/gi';
import { Link } from 'react-router-dom'

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (

    <div className='homepg-div'>

      <div className='homepg-welcome'>
        <h2>Welcome to Haunted Holidays!</h2>
        <p>Do you consider yourself a ghost buster? <RiGhost2Line color='white' /><br />
          A supernatural aficionado? Seeker of the dark arts? <GiDarkSquad color='white' />
          <br /><br />
          Use our app to find the most haunting, cringe-worthy places to visit in the US!
          <br />
          You can also report your own findings, and view other user's spooky encounters!
          <br /><br />
          We encourage you to step out of your comfort zone,<br />
          and set yourself up for possibly the scariest experience of a lifetime.
          <br /><br />
          <Link to='/signup'>Sign up</Link> today and discover your first scare-venture!
          <br />
          Already a member? <Link to='/login'>Log in</Link> and drop a review, or find your next destination!
          <br /><br />
        </p>
        <h2>Happy Hunting! <GiHaunting color='white' size={'1.8em'} /></h2>

      </div>

      {/* <div className='homepg-scare-sound' align='center'>
        <button onClick={playEffect} className='sound-btn'>
          Enter at your own risk...
        </button>

        <button onClick={pauseEffect} className='sound-btn'>
          Make it stop, I'm too scared!
        </button>
      </div> */}


    </div >

  );
};

export default Home;