import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { useStyles } from "./styles";
import { testRequest } from "../../providers/AuthProviders/slice";
import TextInput from "../../Components/common/TextInput";
import Button from "../../Components/common/Button";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(testRequest());
    console.log("action");
    return () => {};
  }, []);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      className="root"
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={classes.title}>
          Connexion à <br /> votre compte
        </div>
        <div className={classes.description}>
          Bienvenue sur votre portail, identifiez-<br></br>vous ou
          <b> créez un compte</b>
        </div>

        <TextInput label="Adresse email*" />
        <TextInput
          containerStyle={{ marginTop: 20, marginBottom: 15 }}
          isPassword={true}
          label="Mot de passe*"
        />

        <div className={classes.labelNote}>
          * Tous les champs sont obligatoires
        </div>
        <Button
          onClick={() => navigate("/dashboard/")}
          containerStyle={{ marginBottom: 15 }}
          label="SE CONNECTER"
        />
        <div
          onClick={() => alert("Forgot password")}
          className={classes.descriptionBold}
        >
          Mot de passe oublié ?
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
