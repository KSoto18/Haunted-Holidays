// Main Imports
import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import { GiSpookyHouse } from 'react-icons/gi';
// import Auth from '../utils/auth';
// import MapContainer from '../components/MapContainer';


// Components
import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';

// Query Imports
import { QUERY_USER, QUERY_REVIEWS, QUERY_SINGLE_REVIEW } from '../utils/queries';


const Profile = () => {

  const { loading, data } = useQuery(QUERY_USER);

  // console.log(data);

  const user = data?.user || {};


  // console.log(user);
 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h3 className='login-signup-redirect' align='center'>
        You need to be logged in to view your profile.
        <br />
        Please <a href='/login'>log in</a> or <a href='/signup'>sign up</a>.
      </h3>
    );
  }

  return (


    <div className="profilepg-container">

      {/* <h2 className="user-profile-pgtitle">
        Viewing {user ? `${user.username}'s` : 'your'} profile.
      </h2> */}

      <h2 className='hl-redirect-btn'>
        <a href='/hauntedlocations'>Explore Haunted Locations <GiSpookyHouse size={'1.8em'} /></a>
      </h2>

      <div className='reviewform-profilepg'>
        <ReviewForm />
      </div>

      <div className="userreviews-container">

        <h2 className="user-reviews-title">


          {user ? `${user.username}'s` : 'your'} reviews
        </h2>

        <ReviewsList
          reviews={user.reviews}
          title={`${user.username}'s reviews...`}
          showTitle={false}
          showUsername={false}
        />

      </div>

    </div>
  );
};

export default Profile;


