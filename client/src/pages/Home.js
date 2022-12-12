import React from 'react';
import { useQuery } from '@apollo/client';
import PlacesList from '../components/PlacesList';
import PlaceForm from '../components/PlaceForm';
import { QUERY_PLACES } from '../utils/queries';
// import EnterPg from '../components/EnterPg.js';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PLACES);
  const places = data?.places || [];

  return (
    <main>

      {/* <EnterPg /> */}
      <div className="flex-row justify-center">

        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}>
          <PlaceForm />
        </div>

        {/* DIV that says "No Haunted Places Yet" */}
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PlacesList
              places={places}
              title="Some Feed for Place(s)..."
            />
          )}
        </div>

      </div>

    </main>
  );
};

export default Home;
