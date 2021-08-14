import React, { Fragment, useState } from "react";

const Comment = (props) => {
  const [commentIp, setCommentIp] = useState("");

  const renderComments = () => {
    const { commetsParams, post } = props;
    const { comments } = commetsParams;

    const commentsMarkup = comments
      ?.filter((cmt) => cmt.postId === post.id)
      .map(({ id, body, user }) => {
        return (
          <div key={id} className="flex items-center justify-between">
            <div className="pr-2">
              <b>{user}</b> : {body}
            </div>
            <div
              className="flex"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        );
      });

    if (!commentsMarkup?.length) {
      return <Fragment />;
    }
    return (
      <div className="p-3 px-5">
        <div className="text-sm font-thin pb-1">
          All Comments ({commentsMarkup?.length})
        </div>
        {commentsMarkup}
      </div>
    );
  };

  const handleSubmit = (e) => {
    const { commetsParams, post } = props;
    const { addComment } = commetsParams;

    let params = {
      body: commentIp,
      user: "random",
      postId: post.id,
    };

    addComment(
      params,
      (resp) => {
        console.log(resp);
        setCommentIp("");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const handleDelete = (id) => {
    const { commetsParams } = props;
    const { deleteComment } = commetsParams;

    deleteComment({ id });
    //
  };

  return (
    <Fragment>
      {renderComments()}

      <form
        className="pb-3 px-5 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="mb-4 flex-grow" id="comment">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 "
            htmlFor="comment"
          ></label>
          <input
            onChange={(e) => {
              e.preventDefault();
              setCommentIp(e.target.value);
            }}
            value={commentIp}
            className="shadow rounded-2xl appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            type="text"
            placeholder="Write your comment here"
          />
        </div>
        {/* <div className="> */}
        <button
          className=" mb-2 shadow ml-4 rounded-2xl bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 "
          type="submit"
        >
          Submit
        </button>
        {/* </div> */}
      </form>
    </Fragment>
  );
};

export default Comment;
