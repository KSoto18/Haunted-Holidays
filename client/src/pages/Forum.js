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

        <div>

            <ReviewsList
                reviews={reviews}
                title="Some Feed for Review(s)..."
            />
        </div>

    );
};

export default Forum;