import React, { Fragment, useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import ClapImg from "../../assets/icons/clap.png";
import HeartImg from "../../assets/icons/heart.png";
import Heart2Img from "../../assets/icons/heart2.png";
import Thumbs from "../../assets/icons/thumbs.png";

const PostActions = () => {
  const [showActions, setShowActions] = useState(false);

  const renderActions = () => {
    if (showActions) {
      return (
        <div className="tooltiptext flex justify-center">
          <img className=" iconsR" src={Thumbs} alt="clap" />
          <img className=" iconsR" src={ClapImg} alt="clap" />
          <img className=" iconsR" src={Heart2Img} alt="clap" />
          <img className=" iconsR" src={HeartImg} alt="clap" />
        </div>
      );
    } else {
      return <Fragment />;
    }
  };

  return (
    <Fragment>
      {/* <div className="flex p-2 m-2">{renderActions()}</div> */}

      <div className="flex p-2 m-2 ">
        <div className="tooltip">
          {renderActions()}
          <div className="pr-3" onClick={() => setShowActions(!showActions)}>
            <svg className="h-6 w-6">
              <use href={sprite + "#icon-thumbs-up"} />
            </svg>
          </div>
        </div>

        <div className="">
          <svg className="h-6 w-6">
            <use href={sprite + "#icon-bubble"} />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default PostActions;
