import React from "react";
import { Divider, Hidden, Tab, Tabs } from "@material-ui/core";
import { useProfileTabsStyles } from "../../styles";
import { GridIcon, SaveIcon } from "../../icons";

function ProfileTabs({ user, isOwner }) {
  const classes = useProfileTabsStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <section className={classes.section}>
        <Hidden xsDown>
          <Divider />
        </Hidden>
        <Hidden xsDown>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            classes={{
              indicator: classes.tabsIndicator,
            }}
          >
            <Tab
              icon={<span className={classes.postsIconLarge} />}
              label="POSTS"
              classes={{
                root: classes.tabRoot,
                labelIcon: classes.tabLabelIcon,
                wrapper: classes.tabWrapper,
              }}
            />
            {isOwner && (
              <Tab
                icon={<span className={classes.savedIconLarge} />}
                label="SAVED"
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabLabelIcon,
                  wrapper: classes.tabWrapper,
                }}
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            className={classes.tabs}
            classes={{
              indicator: classes.tabsIndicator,
            }}
          >
            <Tab
              icon={
                <GridIcon
                  fill={value === 0 ? "#3897f0" : undefined}
                  classes={{
                    root: classes.tabRoot,
                  }}
                />
              }
            />
            {isOwner && (
              <Tab
                icon={
                  <SaveIcon
                    fill={value === 1 ? "#3897f0" : undefined}
                    classes={{
                      root: classes.tabRoot,
                    }}
                  />
                }
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp>{user.posts.length === 0 && <Divider />}</Hidden>
        {value === 0 && <ProfilePosts user={user} isOwner={isOwner} />}
        {value === 1 && <SavedPosts user={user} />}
      </section>
    </>
  );
}

function ProfilePosts() {
  return <></>;
}

function SavedPosts() {
  return <></>;
}

export default ProfileTabs;
