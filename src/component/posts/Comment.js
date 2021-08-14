import React, { Fragment, useEffect, useState } from "react";

const Comment = (props) => {
  const [commentIp, setCommentIp] = useState("");

  const renderComments = () => {
    const { commetsParams, post } = props;
    const { comments } = commetsParams;

    const commentsMarkup = comments
      ?.filter((cmt) => cmt.postId === post.id)
      .map(({ id, body, user }) => {
        return (
          <p key={id}>
            <b>{user}</b> : {body}
          </p>
        );
      });

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
      },
      (err) => {
        console.log(err);
      }
    );
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
