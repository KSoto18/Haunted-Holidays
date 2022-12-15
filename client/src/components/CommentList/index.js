import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <p className='no-comments-msg'>
      No comments have been made on this post.
    </p>;
  }

  return (
    <div className='comment-list-container'>
      <h3 className="">
        Comments
      </h3>

      <div className="">
        {comments &&
          comments.map((comment) => (

            <div key={comment._id} className="">
              <div className="">
                <h5 className="">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="">{comment.commentText}</p>
              </div>
            </div>

          ))}
      </div>

    </div>
  );
};

export default CommentList;