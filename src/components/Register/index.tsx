import Button from "@mui/material/Button";
import "../../App.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();

    if (password.length >= 6) {
      try {
        const resourse = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(resourse.user);
        alert("User created successfully");
      } catch (error: any) {
        const { message } = error;
        if (message.includes("Email already in use!"))
          alert("Email already exists!");
      }
    } else alert("Password must contain minimum 6 letters!");
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <div className="container-back">
      <div className="post">
        <h3>Registration</h3>
        <Box
          onSubmit={register}
          component="form"
          noValidate
          autoComplete="off"
        >
          <div className="input-area">
            <TextField
              required
              type="email"
              className="email"
              label="Email"
              value={email}
              onChange={handleEmail}
              variant="filled"
            />
            <TextField
              className="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePassword}
              autoComplete="current-password"
              variant="filled"
            />
            <div className="container-button">
              <Button variant="contained" type="submit">
                Sign in
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};
