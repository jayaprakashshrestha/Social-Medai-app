import { TextInput, Label, Checkbox, Button, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../store/slices/UserSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterComponent = (): JSX.Element => {
  const navigation = useNavigate();
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === repeatpassword) {
      dispatch(postRegister({ username, password }));
    } else {
      alert("Password should match");
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your username" />
        </div>
        <TextInput
          id="username"
          type="text"
          placeholder="Username"
          required={true}
          shadow={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          required={true}
          shadow={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setRepeatpassword(event.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree">
          I agree with the
          <a
            href="/forms"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </Label>
      </div>
      {loading ? (
        <Button>
          <Spinner aria-label="Spinner button example" />
          <span className="pl-3">Loading...</span>
        </Button>
      ) : (
        <Button type="submit">Register new account</Button>
      )}

      <Button outline onClick={() => navigation("/login")}>
        Already have an account
      </Button>
    </form>
  );
};

export default RegisterComponent;
