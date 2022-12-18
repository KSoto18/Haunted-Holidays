// Main Imports
import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
// Query Imports
import { QUERY_REVIEWS } from '../utils/queries';
// Components
import ForumList from '../components/ForumList';
import {TbArrowBackUp} from 'react-icons/tb'
const Forum = () => {
    const { loading, data } = useQuery(QUERY_REVIEWS);
    const reviews = data?.reviews || [];

    return (
        <div>

            <div className='forumpg-container'>
                
                <button className='goback-btn-forum'>

          <Link to='/profile'><TbArrowBackUp /> Profile</Link>
        </button>
        <h2 className='forumpg-title'>Haunted Forum</h2>
                <ForumList reviews={reviews} title='User Reviews' />
            </div>

        </div>

    );
};

export default Forum;