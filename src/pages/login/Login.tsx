import { useNavigate, Link } from "react-router-dom";
import React from "react";

const Login = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-t from-[#a5c0d3] to-[#34546c] h-screen m-0">
        <div>
          <button
            type="submit"
            onClick={() => {
              navigate("/home");
            }}
            className="hover:underline mx-4 text-3xl"
          >
            Login useNavigate
          </button>
          <Link to="/home" className="hover:underline  mx-4">
            Login por Link
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
