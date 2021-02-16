import React from "react";
import Layout from "../components/shared/Layout";
import ProfilePicture from "../components/shared/ProfilePicture";
import { useProfilePageStyles } from "../styles";
import { defaultCurrentUser } from "../data";
import { Card, CardContent, Hidden } from "@material-ui/core";

function ProfilePage() {
  const classes = useProfilePageStyles();

  return (
    <Layout
      title={`${defaultCurrentUser.name} (@${defaultCurrentUser.username})`}
    >
      <div className={classes.container}>
        <Hidden smUp>
          <Card className={classes.cardLarge}>
            <ProfilePicture />
            <CardContent className={classes.cardContentLarge}></CardContent>
          </Card>
        </Hidden>
        <Hidden xsDown></Hidden>
      </div>
    </Layout>
  );
}

export default ProfilePage;
