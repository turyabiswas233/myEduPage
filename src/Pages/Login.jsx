import { NavLink } from "react-router-dom";
import Login from "../Components/account/signin/index";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
function LoginPage() {
  return (
    <div className="h-auto py-12 text-center">
      <Login
        child={
          <NavLink to={"/account/create_account"}>
            <PrimaryButton
              classes={
                "bg-green-400/60 mx-auto hover:bg-green-400 duration-100"
              }
              text={"Create new account"}
            />
          </NavLink>
        }
      />
    </div>
  );
}

export default LoginPage;
