import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';
import MapContainer from '../components/MapContainer';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
{/* {loading && <div>loading...</div>} */}
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
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
          <div>
            <ReviewForm />
          </div>
    
      </div>
      <div>
        <MapContainer />
      </div>
    </div>
  );
};

export default Profile;


