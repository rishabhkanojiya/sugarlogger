import React, { useState } from "react";
import { PostContext } from ".";
import { getData } from "../constant/actions";
import { GET_POST_API } from "../constant/apiUrl";

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState(null);

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

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
