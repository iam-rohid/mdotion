import { useCallback } from "react";
import { useForm } from "react-hook-form";

type SignUpFields = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreementChecked: boolean;
};

const SignUp = () => {
  const form = useForm<SignUpFields>();
  const handleLogIn = useCallback((value: SignUpFields) => {}, []);

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
            type="text"
            placeholder="Full Name"
            {...form.register("fullName", {
              required: "Full name is required",
            })}
            className="bg-gray-100 dark:bg-gray-800 px-4 h-10 w-full rounded-md mb-2"
          />
          <input
            type="email"
            placeholder="Email Address"
            {...form.register("email", {
              required: "Email is required",
            })}
            className="bg-gray-100 dark:bg-gray-800 px-4 h-10 w-full rounded-md mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            {...form.register("password", {
              required: "Password is required",
            })}
            className="bg-gray-100 dark:bg-gray-800 px-4 h-10 w-full rounded-md mb-2"
          />
          <button
            type="submit"
            className="bg-accent-500 text-white h-10 px-4 rounded-lg w-full font-medium mt-4"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
