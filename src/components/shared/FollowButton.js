import React from "react";
import { Button } from "@material-ui/core";
import { useFollowButtonStyles } from "../../styles";

function FollowButton({ side }) {
  const classes = useFollowButtonStyles({ side });
  const [isFollowing, setFollowing] = React.useState(false);

  const followButton = (
    <Button
      variant={side ? "text" : "contained"}
      color="primary"
      className={classes.button}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      Follow
    </Button>
  );

  const followingButton = (
    <Button
      variant={side ? "outlined" : "text"}
      className={classes.button}
      onClick={() => setFollowing(false)}
      fullWidth
    >
      followButton
    </Button>
  );

  return isFollowing ? followingButton : followButton;
}

export default FollowButton;
