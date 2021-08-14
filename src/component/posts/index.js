import React, { Fragment, useEffect } from "react";
import { PostContext } from "../../context";
import { Consume } from "../../context/Consumer";
import Loader from "../Loader";
import Post from "./Post";

const Posts = (props) => {
  useEffect(() => {
    const { getPosts, getComment, getReaction, isLoading, setIsLoading } =
      props.postData;

    getPosts(
      {},
      (resp) => {
        getComment(
          {},
          (resp) => {},
          (err) => {
            console.log(err);
          }
        );
        getReaction(
          {},
          (resp) => {},
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const renderRows = () => {
    const { postData } = props;
    let commetsParams = {
      comments: postData.comments,
      addComment: postData.addComment,
    };

    let reactionsParams = {
      reactions: postData.reactions,
      addReaction: postData.addReaction,
    };

    return postData.posts.map((post, index) => {
      let postParams = {
        post,
        commetsParams,
        reactionsParams,
      };

      return <Post key={post.id} {...postParams} />;
    });
  };

  const { postData } = props;

  if (!postData.reactions?.length) {
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

export default Consume(Posts, [PostContext]);
