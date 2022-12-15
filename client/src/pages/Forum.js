// Main Imports
import React from 'react';
import { useQuery } from '@apollo/client';

// Query Imports
import { QUERY_REVIEWS } from '../utils/queries';

// Components
import ReviewsList from '../components/ReviewsList';

const Forum = () => {
    const { loading, data } = useQuery(QUERY_REVIEWS);
    const reviews = data?.reviews || [];

    return (

        <div className='forumpg-container'>
            <h2 className='forumpg-title'>Haunted Forum</h2>
            <ReviewsList reviews={reviews} title='User Reviews' />
        </div>

    );
};

export default Forum;