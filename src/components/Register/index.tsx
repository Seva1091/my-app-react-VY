import "../../App.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";

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
      <form onSubmit={register}>
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
        <button type="submit">Sign in</button>
      </form>
    </div>

    </div>
  );
};
