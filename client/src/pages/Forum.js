// Main Imports
import React from 'react';
import { useQuery } from '@apollo/client';

// Query Imports
import { QUERY_REVIEWS } from '../utils/queries';

// Components
import ReviewsList from '../components/ReviewsList';
import ReviewForm from '../components/ReviewForm';

const Forum = () => {
    const { loading, data } = useQuery(QUERY_REVIEWS);
    const reviews = data?.reviews || [];

    return (

        <div>

            <div className='reviewform-profilepg'>
                <ReviewForm />
            </div>

            <ReviewsList
                reviews={reviews}
                title="Some Feed for Review(s)..."
            />
        </div>

    );
};

export default Forum;