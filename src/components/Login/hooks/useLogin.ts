import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";

type UseLoginData = {
  email: string;
  password: string;
  login: (event: FormEvent<HTMLFormElement>) => void;
  handleEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useLogin = (): UseLoginData => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();

    if (password.length >= 6) {
      try {
        const resourse = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Successfully signed");
        console.log(resourse.user);
      } catch (error) {
        console.log(error);
      }
    } else alert("Incorrect password!");
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return {
    email,
    password,
    login,
    handleEmail,
    handlePassword,
  };
};
