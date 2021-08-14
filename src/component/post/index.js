import React, { Fragment, useEffect } from "react";
import { PostContext } from "../../context";
import { Consume } from "../../context/Consumer";
import Loader from "../Loader";
import Comment from "./Comment";
import MainImage from "./MainImage";
import PostActions from "./PostActions";
import Reactions from "./Reactions";

const Post = (props) => {
  useEffect(() => {
    const { postData } = props;
    const { getPosts } = postData;

    getPosts(
      {},
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const renderRows = () => {
    const { postData } = props;
    return postData.posts.map((post, index) => {
      let postParams = { post };

      return (
        <Fragment key={index}>
          <div className="mcard rounded-2xl my-2 mx-3  h-auto  shadow-2xl">
            <MainImage {...postParams} />
            <Reactions />
            <PostActions />
            <Comment />
          </div>
        </Fragment>
      );
    });
  };

  const { postData } = props;
  if (!postData.posts?.length) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {renderRows()}
      </div>
    </Fragment>
  );
};

export default Consume(Post, [PostContext]);
