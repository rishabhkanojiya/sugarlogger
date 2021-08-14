import React, { Fragment } from "react";
import actions from "../../constant/actions";
import config from "../../constant/config";

const Reactions = (props) => {
  const renderReactions = () => {
    const { post, reactionsParams } = props;
    const { reactions, addReaction } = reactionsParams;

    const tempReactions = reactions?.filter((rec) => rec.postId === post.id);

    const tempRec = actions.groupBy(tempReactions, "reactionId");

    const reactionMarkup = Object.keys(tempRec).map((rec) => {
      const imgData = actions.getImage(rec);

      return (
        <div key={rec} className="pl-1  flex mx-2 items-center">
          <p className="text-sm font-thin ">{tempRec[rec]?.length}</p>
          <img
            key={imgData.id}
            className="iconsRsec mr-1"
            src={imgData.url}
            alt={imgData.alt}
          ></img>
        </div>
      );
    });

    if (!reactionMarkup?.length) {
      return <Fragment />;
    }

    return <div className="flex ">{reactionMarkup}</div>;
  };

  return <div>{renderReactions()}</div>;
};

export default Reactions;
