// Main Imports
import React from 'react';
import { useQuery } from '@apollo/client';

// Query Imports
import { QUERY_REVIEWS } from '../utils/queries';

// Components
import ForumList from '../components/ForumList';
import ForumForm from '../components/ForumForm';

import { TbArrowBackUp } from 'react-icons/tb';

const Forum = () => {
    const { loading, data } = useQuery(QUERY_REVIEWS);
    const reviews = data?.reviews || [];

    return (
        <div>

            {/* <div className='reviewform-forumpg'>
                <ForumForm />
            </div> */}

            <div className='forumpg-container'>
                <h2 className='forumpg-title'>Haunted Forum</h2>

                <ForumList reviews={reviews} title='User Reviews' />
            </div>

        </div>

    );
};

export default Forum;