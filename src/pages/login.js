import React from "react";
import {
  Button,
  Card,
  CardHeader,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import SEO from "../components/shared/Seo";
import { useLoginPageStyles } from "../styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FacebookIconBlue from "../images/facebook-icon-blue.svg";
import FacebookIconWhite from "../images/facebook-icon-white.png";

function LoginPage() {
  const classes = useLoginPageStyles();
  const { register, handleSubmit } = useForm({ mode: "onBlur" });

  function onSubmit(data) {
    console.log({ data });
  }

  return (
    <>
      <SEO title="Login" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                fullWidth
                variant="filled"
                label="Username, email, or phone"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <Button>Show</Button>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="current-password"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
              >
                Log In
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
            <LoginWithFacebook color="secondary" iconColor="blue" />
            <Button fullWidth color="secondary">
              <Typography variant="caption">Forgot password?</Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an account?
            </Typography>
            <Link to="/accounts/emailsignup">
              <Button color="primary" className={classes.signUpButton}>
                Sign up
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor, variant }) {
  const classes = useLoginPageStyles();
  const facebookIcon =
    iconColor === "blue" ? FacebookIconBlue : FacebookIconWhite;

  return (
    <Button fullWidth color={color} variant={variant}>
      <img
        src={facebookIcon}
        alt="facebook icon"
        className={classes.facebookIcon}
      />
      Log In with Facebook
    </Button>
  );
}

export default LoginPage;
