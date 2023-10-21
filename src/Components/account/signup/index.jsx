import { useState } from "react";
import Input from "../Input";
function Signup() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="signin">
      <h1 className="text-center m-10 -mb-10 text-3xl font-bold underline">
        Create a new account
      </h1>
      <form onSubmit={handlesubmit}>
        <div className="create">
          {/* email */}
          <Input
            id={"email"}
            placeHolder={"enter your email"}
            setVal={setemail}
            value={email}
            autoComplete={false}
            type={"email"}
            title={"Email"}
          />
          {/* password */}
          <Input
            id={"pass"}
            placeHolder={"type your password"}
            setVal={setpass}
            value={pass}
            autoComplete={false}
            type={"password"}
            title={"Password"}
          />

          {/* button */}
          <button
            className="bg-slate-900 text-slate-100 rounded-md p-3 hover:bg-blue-600 hover:shadow-blue-500/40 hover:shadow-lg duration-100 ease-out"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
