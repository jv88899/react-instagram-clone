import React from "react";
import { useSignUpPageStyles } from "../styles";
import SEO from "../components/shared/Seo";
import {
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { LoginWithFacebook } from "./login";
import { AuthContext } from "../auth";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import { CheckCircleOutline, HighlightOff } from "@material-ui/icons";

function SignUpPage() {
  const classes = useSignUpPageStyles();
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onBlur",
  });
  const { signUpWithEmailAndPassword } = React.useContext(AuthContext);
  const history = useHistory();
  const [error, setError] = React.useState("");

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   await signUpWithEmailAndPassword(values);
  //   history.push("/");
  // }

  async function onSubmit(data) {
    // console.log({ data });
    try {
      await signUpWithEmailAndPassword(data);
      history.push("/");
    } catch (error) {
      console.error("Error signing up", error);
      setError(error.message);
    }
  }

  const errorIcon = (
    <InputAdornment>
      <HighlightOff style={{ color: "red", height: 30, width: 30 }} />
    </InputAdornment>
  );

  const validIcon = (
    <InputAdornment>
      <CheckCircleOutline style={{ color: "#ccc", height: 30, width: 30 }} />
    </InputAdornment>
  );

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="email"
                inputRef={register({
                  required: true,
                  validate: (input) => isEmail(input),
                })}
                InputProps={{
                  endAdornment: errors.email
                    ? errorIcon
                    : formState.touched.email && validIcon,
                }}
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
                InputProps={{
                  endAdornment: errors.name
                    ? errorIcon
                    : formState.touched.name && validIcon,
                }}
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
                InputProps={{
                  endAdornment: errors.username
                    ? errorIcon
                    : formState.touched.username && validIcon,
                }}
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
                InputProps={{
                  endAdornment: errors.password
                    ? errorIcon
                    : formState.touched.password && validIcon,
                }}
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="new-password"
              />
              <Button
                disabled={!formState.isValid || formState.isSubmitted}
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
              >
                Sign Up
              </Button>
              <AuthError error={error} />
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

export function AuthError({ error }) {
  return (
    Boolean(error) && (
      <Typography
        align="center"
        gutterBottom
        variant="body2"
        style={{ color: "red" }}
      >
        {error}
      </Typography>
    )
  );
}

export default SignUpPage;
