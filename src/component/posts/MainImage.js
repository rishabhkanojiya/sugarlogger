import React, { Fragment } from "react";

const MainImage = (props) => {
  const { author, desc, id, url } = props?.post;
  return (
    <Fragment>
      <div className="p-3 font-bold">{author}</div>
      <div
        className="bg-cover bg-no-repeat bg-origin-content bg-center "
        style={{
          backgroundImage: `url(${url})`,
          height: "15rem",
          // "url(https://media.wired.com/photos/5d09594a62bcb0c9752779d9/16:9/w_2000,h_1125,c_limit/Transpo_G70_TA-518126.jpg)",
        }}
      ></div>
      <div className="flex flex-col p-2">
        <div className="bold">Description</div>
        <div className="">{desc}</div>
      </div>
    </Fragment>
  );
};

export default MainImage;
