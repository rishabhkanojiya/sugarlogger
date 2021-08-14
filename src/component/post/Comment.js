import React from "react";

const Comment = () => {
  return (
    // <div className="p-3 px-5">
    //   <p className="text-sm font-thin pb-1">All Comments (1)</p>
    //   <p>
    //     <b>author</b> : Comment Comment
    //   </p>{" "}
    //   <p>
    //     <b>author</b> : Comment Comment
    //   </p>{" "}
    //   <p>
    //     <b>author</b> : Comment Comment
    //   </p>
    // </div>

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
  );
};

export default Comment;
