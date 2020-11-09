import React, { useState } from "react";
import * as Yup from "yup";
import Constants from "expo-constants";

import AppForm from "../components/AppForm";
import Register from "../api/users";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/ErrorMessage";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

function RegisterScreen(props) {
  const registerApi = useApi(Register.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();
  const auth = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("E-mail"),
    password: Yup.string().required().min(4).label("Password"),
  });

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          placeholder={"Name"}
          iconName={"account"}
          name={"name"}
        />
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

        <SubmitButton title={"Register"} />
      </AppForm>
    </>
  );
}

export default RegisterScreen;
