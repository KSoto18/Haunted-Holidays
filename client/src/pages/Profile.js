import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';
import MapContainer from '../components/MapContainer';

const Profile = () => {

  // const { username: userParam } = useParams();
  // const reviews = data?.reviews || [];

  const { loading, data } = useQuery(QUERY_USER);

  console.log(data);

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_REVIEWS);

  // const user = Auth.getProfile();
  const user = data?.user || {};

  // const user = data?.me || data?.user || {};

  console.log(user);
  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn()) {
  //   return <Navigate to="/profile" />;
  // }

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

      <h2 className="user-profile-pgtitle">
        Viewing {user ? `${user.username}'s` : 'your'} profile.
      </h2>

      <div className='reviewform-profilepg'>
        <ReviewForm />
      </div>

      <div className="userreviews-container">

        <h2 className="user-reviews-title">
          {user ? `${user.username}'s` : 'your'} reviews.
</h2>
        <ReviewsList
          reviews={user.reviews}
          title={`${user.username}'s reviews...`}
          showTitle={false}
          showUsername={false}
        />
      </div>

      {/* {!user && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          > */}

    </div>
  );
};

export default Profile;


