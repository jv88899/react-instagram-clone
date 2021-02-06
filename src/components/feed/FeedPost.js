import React from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import { MoreIcon } from "../../icons";

function FeedPost({ post }) {
  const classes = useFeedPostStyles();

  return (
    <>
      <article className={classes.article}>
        {/* Feed Post Header */}
        <div className={classes.postHeader}>
          <UserCard />
          <MoreIcon className={classes.moreIcon} />
        </div>
      </article>
    </>
  );
}

export default FeedPost;
