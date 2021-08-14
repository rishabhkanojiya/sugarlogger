import React, { useState } from "react";
import { PostContext } from ".";
import { getData } from "../constant/actions";
import { GET_COMMENT_API, GET_POST_API } from "../constant/apiUrl";

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);

  const getPosts = (paramsObj, cb, err) => {
    let apiParams = {
      url: GET_POST_API,
      method: "GET",
      name: "POSTS",
      params: paramsObj,
    };
    getData(
      apiParams,
      (resp) => {
        setPosts(resp.data);
        if (cb) {
          cb(resp.data);
        }
      },
      (error) => {
        if (err) {
          err(error);
        }
      }
    );
  };

  const getComment = (paramsObj, cb, err) => {
    let apiParams = {
      url: GET_COMMENT_API,
      method: "GET",
      name: "Get Comments",
      params: paramsObj,
    };
    getData(
      apiParams,
      (resp) => {
        setComments(resp.data);
        if (cb) {
          cb(resp.data);
        }
      },
      (error) => {
        if (err) {
          err(error);
        }
      }
    );
  };

  const addComment = (paramsObj, cb, err) => {
    let apiParams = {
      url: GET_POST_API,
      method: "POST",
      name: "add Comments",
      params: paramsObj,
    };
    getData(
      apiParams,
      (resp) => {
        setPosts(resp.data);
        if (cb) {
          cb(resp.data);
        }
      },
      (error) => {
        if (err) {
          err(error);
        }
      }
    );
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        comments,
        getPosts,
        getComment,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
