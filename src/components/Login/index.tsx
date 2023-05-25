import "../../App.scss";
import { useLogin } from "./hooks/useLogin";

export const Login = () => {
  const { email, password, login, handleEmail, handlePassword } = useLogin();

  return (
    <div className="container-back">
    <div className="post">
      <form onSubmit={login}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <br></br>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <br></br>
        <button type="submit">Log in</button>
      </form>
    </div>

    </div>
  );
};
