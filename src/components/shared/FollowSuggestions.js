import React from "react";
import { Typography } from "@material-ui/core";
import { LoadingLargeIcon } from "../../icons";
import { getDefaultUser } from "../../data";
import { useFollowSuggestionsStyles } from "../../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FollowSuggestions() {
  const classes = useFollowSuggestionsStyles();

  let loading = true;

  return (
    <div className={classes.container}>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        className={classes.typography}
      >
        Suggestions for You
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <Slider
          className={classes.slide}
          dots={false}
          infinite
          speed={1000}
          touchThreshold={1000}
          variableWidth
          swipeToSlide
          arrows
          slidesToScroll={3}
          easing="ease-in-out"
        >
          {Array.from({ length: 10 }, () => getDefaultUser()).map((user) => (
            <FollowSuggestionsItem key={user.id} user={user} />
          ))}
        </Slider>
      )}
    </div>
  );
}

function FollowSuggestionsItem() {
  return null;
}

export default FollowSuggestions;
