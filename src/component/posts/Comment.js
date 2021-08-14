import React, { Fragment } from "react";

const Comment = (props) => {
  const renderComments = () => {
    const { commetsParams, post } = props;
    const { comments } = commetsParams;

    const commentsMarkup = comments
      ?.filter((cmt) => cmt.postId === post.id)
      .map(({ id, body, user }) => {
        return (
          <p>
            <b>{user}</b> : {body}
          </p>
        );
      });

    // if (post.id === postId) {

    if (!commentsMarkup?.length) {
      return <Fragment />;
    }
    return (
      <div className="p-3 px-5">
        <p className="text-sm font-thin pb-1">
          All Comments ({commentsMarkup?.length})
        </p>
        {commentsMarkup}
      </div>
    );
  };

  return (
    <Fragment>
      {renderComments()}

      <div className="pb-3 px-5 flex items-center">
        <div className="mb-4 flex-grow">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 "
            htmlFor="comment"
          ></label>
          <input
            className="shadow rounded-2xl appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            id="comment"
            type="text"
            placeholder="Write your comment here"
          />
        </div>
        <div className="mb-2">
          <button
            className="shadow ml-4 rounded-2xl bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 "
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Comment;
