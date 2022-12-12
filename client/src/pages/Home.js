import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewsList from '../components/ReviewsList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_REVIEWS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ReviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewsList
              reviews={reviews}
              title="Some Feed for Review(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;