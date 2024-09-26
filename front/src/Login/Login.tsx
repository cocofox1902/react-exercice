import React, { useState } from "react";

interface LoginProps {
  setLoginState: (state: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setLoginState }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setLoginState(true);
      } else {
        setErrorMessage("Username or Password is false !");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleLogin}
          className="my-2 mx-6 p-6 bg-black border-4 border-yellow-400 rounded-2xl mb-6"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Login
          </h2>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center mb-4 absolute">
              {errorMessage}
            </p>
          )}
          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-black border-2 border-yellow-400 rounded-xl text-white p-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
