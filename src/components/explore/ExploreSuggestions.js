import React from "react";
import { Hidden, Typography } from "@material-ui/core";
import { useExploreSuggestionsStyles } from "../../styles";
import FollowSuggestions from "../shared/FollowSuggestions";

function ExploreSuggestions() {
  const classes = useExploreSuggestionsStyles();

  return (
    <Hidden xsDown>
      <div className={classes.container}>
        <Typography
          color="textSecondary"
          variant="subtitle2"
          component="h2"
          className={classes.typography}
        >
          Discover People
        </Typography>
        <FollowSuggestions hideHeader={true} />
      </div>
    </Hidden>
  );
}

export default ExploreSuggestions;
