import "../../App.scss";
import { useLogin } from "./hooks/useLogin";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Login = () => {
  const { email, password, login, handleEmail, handlePassword } = useLogin();

  return (
    <div className="container-back">
      <div className="post">
        <h3>Registration</h3>
        <Box onSubmit={login} component="form" noValidate autoComplete="off">
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
                Log in
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};
