import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { REMOVE_REVIEW } from '../../utils/mutations';
import DeleteIcon from '@mui/icons-material/Delete'
import { QUERY_USER } from '../../utils/queries';

const ReviewsList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
  isLoggedInUser = false
}) => {
  const [removeReview, {error}] = useMutation(REMOVE_REVIEW, {
    update(cache, {data: {removeReview} }) {
      try{
        cache.writeQuery({
          query: QUERY_USER,
          data: {user: removeReview},
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  if (!reviews) {
    return <h3>No Haunted Stories Yet</h3>;
  }

  const handleRemoveReview = async (review) => {
    console.log('testing')
    try {
      const { data } = await removeReview({
        variables: { reviewId: review },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }



  return (
    <div>

      {showTitle && <h3>{title}</h3>}
      {reviews &&
        reviews.map((review) => (

          <div key={review._id} className=''>

            <div className=''>

              {showUsername ? (

                <div>

                  {review.reviewAuthor} <br />

                  <span style={{ fontSize: '1rem' }}>
                    had this spooky sighting on {review.createdAt}
                  </span>

                  </div>

              ) : (

                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this review on {review.createdAt}
                  </span>
                </>

              )}

            </div>

            <div className=''>
              <p>{review.reviewText}</p>
            </div>

            <Link
              className=''
              to={`/reviews/${review._id}`}>
                
              Add a comment
              
            </Link>
            
            <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveReview(review._id)}
                    >
                      <DeleteIcon/>
                    </button>
          </div>
          

        ))}
 {error && (
         <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
         )}
         </div>
      
  );
};

export default ReviewsList;