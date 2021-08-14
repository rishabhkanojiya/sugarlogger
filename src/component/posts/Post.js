import React, { Fragment, useState } from "react";
import Comment from "./Comment";
import MainImage from "./MainImage";
import PostActions from "./PostActions";
import Reactions from "./Reactions";

const Post = (props) => {
  const [isShow, setIsShow] = useState({
    reactions: false,
    comments: false,
  });

  const { post, commetsParams, reactionsParams } = props;

  const postActionProp = {
    isShow,
    setIsShow,
    reactionsParams,
    post,
  };

  return (
    <Fragment key={post.id}>
      <div className="mcard rounded-2xl my-2 mx-3  h-auto  shadow-2xl">
        <MainImage post={post} />
        <Reactions {...props} />

        <PostActions {...postActionProp} />
        {isShow.comments ? <Comment {...props} /> : <Fragment />}
      </div>
    </Fragment>
  );
};

export default Post;
