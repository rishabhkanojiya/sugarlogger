import React, { Fragment } from "react";
import Comment from "./Comment";
import MainImage from "./MainImage";
import PostActions from "./PostActions";
import Reactions from "./Reactions";

const Post = (props) => {
  const { post, commetsParams } = props;
  return (
    <Fragment key={post.id}>
      <div className="mcard rounded-2xl my-2 mx-3  h-auto  shadow-2xl">
        <MainImage post={post} />
        <Reactions />
        <PostActions />
        <Comment {...props} />
      </div>
    </Fragment>
  );
};

export default Post;
