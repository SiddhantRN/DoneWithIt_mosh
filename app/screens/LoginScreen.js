import React, { useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("E-mail"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }

    setLoginFailed(false);
    logIn(result.data);
  };
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email or password" visible={loginFailed} />
        <AppFormField
          keyboardType={"email-address"}
          textContentType={"emailAddress"}
          placeholder={"e-mail"}
          name={"email"}
          iconName={"email"}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"password"}
          iconName={"lock"}
          secureTextEntry={true}
          name={"password"}
        />

        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "center",
  },
});

export default LoginScreen;
