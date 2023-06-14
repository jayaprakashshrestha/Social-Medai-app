import { TextInput, Label, Checkbox, Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";

const LoginComponent = (): JSX.Element => {
  const navigation = useNavigate();
  const { loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(postLogin({ username, password }));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl text-center">Login</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your username" />
        </div>
        <TextInput
          id="username"
          type="text"
          placeholder="Username"
          required={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          required={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      {loading ? (
        <Button>
          <Spinner aria-label="Spinner button example" />
          <span className="pl-3">Loading...</span>
        </Button>
      ) : (
        <Button type="submit">Submit</Button>
      )}
      <Button outline onClick={() => navigation("/register")}>
        {" "}
        Create a new account
      </Button>
    </form>
  );
};

export default LoginComponent;
