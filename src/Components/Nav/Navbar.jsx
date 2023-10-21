import { links } from "../../assets/LinkInfo";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCaretRight } from "react-icons/bs";
import PrimaryButton from "../Buttons/PrimaryButton";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-auto py-3 pb-4 px-3 md:px-[4] shadow-md">
      <div
        id="navbar"
        className="flex flex-row gap-4 m-auto max-w-6xl w-[100%] items-center"
      >
        {/* logo */}
        <div>
          <h1 className="text-2xl font-bold text-black w-fit pr-3">Logo</h1>
        </div>
        {/* main nav */}
        <div className="flex flex-row justify-between w-full">
          {/* menus */}
          <div className="flex flex-row gap-6 px-4 items-center">
            {links.map((item, value) => {
              return (
                <NavLink
                  key={value}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-md transition-transform text-orange-400"
                      : isActive
                      ? "text-md transition-transform text-secondary-dark"
                      : "text-md transition-transform text-black"
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* buttons */}
          <div className="hidden md:flex flex-row gap-3">
            <PrimaryButton
              text={"All Courses"}
              classes={"bg-onPrimary-light"}
            />
            <NavLink to={"/account/login"}>
              <PrimaryButton
                icon={<BsCaretRight fontSize={".9rem"} />}
                text={"Login"}
                classes={`duration-200 ${
                  pathname.includes("login")
                    ? "bg-secondary-dark text-white"
                    : "bg-secondary-main"
                }`}
              />
            </NavLink>
          </div>

          {/* buttons */}
          <div className="flex md:hidden flex-row gap-3">
            <PrimaryButton
              text={"All Courses"}
              classes={"bg-onPrimary-light"}
            />
            <PrimaryButton
              icon={<RxHamburgerMenu fontSize={"1.2rem"} />}
              classes={"bg-secondary-main p-2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
