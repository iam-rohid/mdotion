import { useCallback } from "react";
import { useForm } from "react-hook-form";

type LogInFields = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LogIn = () => {
  const form = useForm<LogInFields>();
  const handleLogIn = useCallback((value: LogInFields) => {}, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen max-w-xs">
        <div className="mb-8">
          <p className="text-3xl font-semibold text-center">
            Log in to Mdotion
          </p>
        </div>
        <form onSubmit={form.handleSubmit(handleLogIn)}>
          <input
            type="email"
            placeholder="Email Address"
            {...form.register("email", {
              required: "Email is required",
            })}
            className="bg-gray-100 dark:bg-gray-800 px-4 h-12 w-full rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            {...form.register("password", {
              required: "Password is required",
            })}
            className="bg-gray-100 dark:bg-gray-800 px-4 h-12 w-full rounded-lg mb-4"
          />
          <button
            type="submit"
            className="bg-accent-500 text-white h-12 px-4 rounded-lg w-full font-medium"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
