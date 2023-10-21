import { useState } from "react";
import Input from "../Input";
import PrimaryButton from "../../Buttons/PrimaryButton";
function Login({ child }) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [check, setchk] = useState(false);
  function handlesubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="signin">
      <h1 className=" text-center -mb-5 text-3xl underline font-bold">
        Sign in
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
            placeHolder={"enter your password"}
            setVal={setpass}
            value={pass}
            autoComplete={false}
            type={"password"}
            title={"Password"}
          />
          {/* check box */}
          <PrimaryButton
            classes={"flex justify-start gap-4 items-center select-none -mx-2"}
            onClick={() => setchk((pre) => !pre)}
            children={
              <>
                <div
                  className={`w-3 h-3 p-1 rounded-full ring-1 ring-offset-1 duration-150 ease-linear ${
                    check
                      ? "bg-sky-500 ring-sky-400"
                      : "bg-transparent ring-gray-400"
                  }`}
                ></div>
                <p className="text-xs">Remember me</p>
              </>
            }
          ></PrimaryButton>
          {/* button */}
          <PrimaryButton
            classes={
              "bg-slate-900 text-slate-100 rounded-md p-3 hover:bg-blue-600 hover:shadow-blue-500/40 hover:shadow-lg duration-100 ease-out disabled:cursor-not-allowed "
            }
            textClasses={"text-center w-full"}
            text={"Login"}
            type="submit"
            disabled={!email || !pass}
          />

          <p className="underline text-right text-sm hover:text-blue-600 duration-150 ease-out">
            <a href="/forgetPassword">forget password?</a>
          </p>
          <div className="mt-4">{child}</div>
        </div>
      </form>
    </div>
  );
}

export default Login;
