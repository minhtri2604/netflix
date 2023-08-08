import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async(e) =>{
    e.preventDefault()
    try {
      await logOut()
      navigate('/login')

    } catch (error) {
      console.log()
    }
  }

  return (
    <>
      <div className="flex w-full items-center justify-between p-4 z-[100] absolute">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>

        <div className="">
          {user?.email ? (
            <>
              {" "}
              <Link to="/account">
                <button className="text-white pr-4 ">Accout</button>
              </Link>
              <Link to="/signup">
                <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded text-white cursor-pointer hover:bg-[rgb(193,17,25)]">
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="text-white pr-4 ">Sign in</button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-600 px-6 py-2 rounded text-white cursor-pointer hover:bg-[rgb(193,17,25)]">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
