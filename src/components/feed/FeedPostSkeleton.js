import React from "react";
import { usePostSkeletonStyles } from "../../styles";

export function PostSkeleton() {
  const classes = usePostSkeletonStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerSkeleton}>
        <div className={classes.avatarSkeleton} />
        <div className={classes.headerTextSkeleton}>
          <div className={classes.primaryTextSkeleton} />
          <div className={classes.secondaryTextSkeleton} />
        </div>
      </div>
      <div className={classes.mediaSkeleton} />
    </div>
  );
}

export default PostSkeleton;
