import React from "react";
import Layout from "../components/shared/Layout";
import ProfilePicture from "../components/shared/ProfilePicture";
import { useProfilePageStyles } from "../styles";
import { defaultCurrentUser } from "../data";
import { Card, CardContent, Hidden } from "@material-ui/core";

function ProfilePage() {
  const classes = useProfilePageStyles();
  const [showOptionsMenu, setOptionsMenu] = React.useState(false);
  const isOwner = true;

  function handleOptionsMenuClick() {
    setOptionsMenu(true);
  }

  return (
    <Layout
      title={`${defaultCurrentUser.name} (@${defaultCurrentUser.username})`}
    >
      <div className={classes.container}>
        <Hidden xsDown>
          <Card className={classes.cardLarge}>
            <ProfilePicture isOwner={isOwner} />
            <CardContent className={classes.cardContentLarge}>
              <ProfileNameSection
                user={defaultCurrentUser}
                isOwner={isOwner}
                handleOptionsMenuClick={handleOptionsMenuClick}
              />
              <PostCountSection />
              <NameBioSection />
            </CardContent>
          </Card>
        </Hidden>
        <Hidden smUp>
          <Card className={classes.cardSmall}>
            <CardContent>
              <section className={classes.sectionSmall}>
                <ProfilePicture size={77} isOwner={isOwner} />
                <ProfileNameSection
                  user={defaultCurrentUser}
                  isOwner={isOwner}
                  handleOptionsMenuClick={handleOptionsMenuClick}
                />
              </section>
              <NameBioSection />
            </CardContent>
            <PostCountSection />
          </Card>
        </Hidden>
      </div>
    </Layout>
  );
}

function ProfileNameSection() {
  return <>ProfileNameSection</>;
}

function PostCountSection() {
  return <>PostCountSection</>;
}

function NameBioSection() {
  return <>NameBioSection</>;
}

export default ProfilePage;
