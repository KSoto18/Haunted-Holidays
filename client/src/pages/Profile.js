// Main Imports
import React from 'react';
import { Link } from 'react-router-dom';
// import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { GiSpookyHouse } from 'react-icons/gi';
// import DarkMap from '../assets/img/darkmap.png';
import { MdOutlineForum } from 'react-icons/md';
import { SlLogout } from 'react-icons/sl';
import Auth from '../utils/auth';
// import MapContainer from '../components/MapContainer';

// Components
import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';

// Query Imports
import { QUERY_USER, QUERY_REVIEWS, QUERY_SINGLE_REVIEW } from '../utils/queries';


const Profile = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { loading, data, error } = useQuery(QUERY_USER);

  const user = data?.user || {};
// console.log(user, data, error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (

      <h3 className='login-signup-redirect' align='center'>
        You need to be logged in to view your profile.
        <br />
        Please <Link to='/login'>log in</Link> or <Link to='/signup'>sign up</Link>.
      </h3>

    );
  }

  return (

    <div className='profile-pg-container'>
          <div>
                  <Link className="logout-btn"
                    style={{ fontSize: '14px' }}
                    onClick={logout}>
                    Logout <SlLogout />
                  </Link>
                </div>
      <div align='center' className='redirect-btns-profilepg'>
      <p className='hello-user-msg'>
                  Hello, {user.username}!</p>
        <div className='hl-redirect'>
          <Link to='/hauntedlocations'>
            <div className='darkmapimg'>
              <p className='hl-redirect-link'>
                View Haunted Locations</p>
            </div>
          </Link>
        </div>

        <h2 className='forum-redirect-btn'>
          <Link to='/forum'>Go to the Forum <MdOutlineForum size={'1.8em'} /></Link>
        </h2>

      </div>

      <div className="profilepg-container">

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

    </div>
  );
};

export default Profile;


