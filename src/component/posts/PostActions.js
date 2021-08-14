import React, { Fragment, useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import config from "../../constant/config";

const PostActions = (props) => {
  const [showActions, setShowActions] = useState(false);

  const handleRecSubmit = (id) => {
    const { reactionsParams, post } = props;
    const { addReaction } = reactionsParams;

    let params = {
      reactionId: id,
      postId: post.id,
    };

    addReaction(params);
  };
  const renderActions = () => {
    if (showActions) {
      return (
        <div className="tooltiptext flex justify-center">
          {config.reactionImages.map(({ id, url, name, alt }) => {
            return (
              <img
                onClick={(e) => {
                  handleRecSubmit(id);
                  setShowActions(false);
                }}
                key={id}
                className="iconsR"
                src={url}
                alt={alt}
              ></img>
            );
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
        <div className="tooltip" onClick={() => setShowActions(!showActions)}>
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
