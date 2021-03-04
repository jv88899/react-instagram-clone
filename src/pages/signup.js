import React from "react";
import { useSignUpPageStyles } from "../styles";
import SEO from "../components/shared/Seo";
import { Button, Card, TextField, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { LoginWithFacebook } from "./login";
import { AuthContext } from "../auth";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

function SignUpPage() {
  const classes = useSignUpPageStyles();
  const { register, handleSubmit } = useForm();
  const { signUpWithEmailAndPassword } = React.useContext(AuthContext);
  const history = useHistory();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   await signUpWithEmailAndPassword(values);
  //   history.push("/");
  // }

  return (
    <>
      <SEO title="Sign up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook
              color="primary"
              iconColor="white"
              variant="contained"
            />
            <div className={classes.orContainer}>
              <div className={classes.orLine}></div>
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine}></div>
            </div>
            <form onSubmit={handleSubmit}>
              <TextField
                name="email"
                inputRef={register({
                  required: true,
                  validate: (input) => isEmail(input),
                })}
                fullWidth
                variant="filled"
                label="Email"
                type="email"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                name="name"
                inputRef={register({
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
                fullWidth
                variant="filled"
                label="Full Name"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                name="username"
                inputRef={register({
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                  // accept only lowercase/uppercase letters
                  // numbers, periods and underscores
                  pattern: /^[a-zA-Z0-9_.]*$/,
                })}
                fullWidth
                variant="filled"
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                name="password"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="new-password"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine}></div>
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine}></div>
            </div>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              Have an account?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.loginButton}>
                Login
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
