import React, { Fragment, useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import ClapImg from "../../assets/icons/clap.png";
import HeartImg from "../../assets/icons/heart.png";
import Heart2Img from "../../assets/icons/heart2.png";
import Thumbs from "../../assets/icons/thumbs.png";
import config from "../../constant/config";

const PostActions = (props) => {
  const [showActions, setShowActions] = useState(false);

  const renderActions = () => {
    if (true) {
      return (
        <div className="tooltiptext flex justify-center">
          {config.reactionImages.map(({ id, url, name, alt }) => {
            return <img key={id} className="iconsR" src={url} alt={alt}></img>;
          })}
        </div>
      );
    } else {
      return <Fragment />;
    }
  };

  const { isShow, setIsShow } = props;

  return (
    <Fragment>
      {/* <div className="flex p-2 m-2">{renderActions()}</div> */}

      <div className="flex p-2 m-2 ">
        <div
          className="tooltip"
          onMouseEnter={() => setShowActions(true)}
          onMouseLeave={() => setShowActions(false)}
        >
          {renderActions()}
          <div className="pr-3">
            <svg className="h-6 w-6">
              <use href={sprite + "#icon-thumbs-up"} />
            </svg>
          </div>
        </div>

        <div
          className=""
          onClick={() => {
            setIsShow({
              comments: !isShow.comments,
            });
          }}
        >
          <svg className="h-6 w-6">
            <use href={sprite + "#icon-bubble"} />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default PostActions;
