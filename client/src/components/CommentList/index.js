import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <p className='no-comments-msg'>
      No comments have been made on this post.
    </p>;
  }
  console.table(comments)

  return (
    <div className='comment-list-container'>
      {/* <h3 className="comments-section">
        Comments
      </h3> */}

      <div>
        {comments &&
          comments.map((comment) => (

            <div key={comment._id}>
              <div className='comment-content-container'>
                <h3 className='comment-content'>
                  {comment.commentAuthor} commented{' '} on {comment.createdAt}
                </h3>
                <p><i>{comment.commentText}</i></p>
              </div>
            </div>

          ))}
      </div>

    </div>
  );
};

export default CommentList;