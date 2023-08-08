import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const {  logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className="w-full h-screen ">
      <img
        className="hidden md:block md:w-full md:h-full   "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/e316c86e-cf54-45d5-992b-e7cb9a45652f/VN-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full h-screen top-0 right-0 bottom-0 left-0 z-20 ">
        <div className="md:w-[450px] h-[600px] mx-auto my-16 rounded bg-black/75 text-white">
          <div className="w-full md:w-[320px] mx-auto px-8 md:px-[0] py-16 relative">
            <h2 className="text-3xl">Sign in</h2>
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit } className="mt-8">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none rounded my-4 p-[13px] text-black "
                type="email"
                placeholder="Please fill email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none rounded p-[13px] text-[#050707] "
                type="password"
                placeholder="Please fill password"
              />

              <button
               
                className="mt-[46px] mb-[12px] w-full bg-[#e50914] text-white rounded p-[12px] cursor-pointer font-bold"
              >
                Sign in
              </button>

              <div className="w-full flex justify-between">
                <span className="flex text-sm text-gray-600">
                  <input id="check" type="checkbox" />
                  <label htmlFor="check" className="ml-2">
                    Remember me
                  </label>
                </span>
                <a className="text-sm text-gray-600 hover:underline" href="/">
                  Need help ?
                </a>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>
                <Link className="text-md ml-2 hover:underline" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
