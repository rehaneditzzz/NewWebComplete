import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignupSchema = z.object({
  username: z
    .string()
    .min(2, "Username must have at least 2 characters")
    .max(30, "Username must not exceed 30 characters"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must have at least 6 characters"),
  role: z.enum(["user", "admin"], {
    errorMap: () => ({ message: "Select a valid role" }),
  }),
});

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);

      const { token, role } = response.data; 
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);

      //

      alert("Signup successful!");
      // Redirect the user to a protected route or dashboard
      reset();
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setServerError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-700">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h1>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              className={`w-full p-2 mt-1 border rounded-md ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full p-2 mt-1 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`w-full p-2 mt-1 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              {...register("role")}
              className={`w-full p-2 mt-1 border rounded-md ${
                errors.role ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="user">Student</option>
              <option value="admin">Teacher</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-700"
            }`}
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
          {/* Server Error Message */}
          {serverError && (
            <p className="text-red-500 text-sm text-center">{serverError}</p>
          )}
          {/* Login Link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
