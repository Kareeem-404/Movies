import Form from "../components/Ui-components/Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {

  const navigate = useNavigate();

  // -------------------------- Yup Schema --------------------------
  const registerSchema = yup.object({
    name: yup
      .string()
      .trim()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),

    email: yup
      .string()
      .trim()
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is not valid"),

    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\W])[A-Za-z\d.\W]{8,}$/,
        "Password must contain uppercase, lowercase, number & special character"
      ),

    age: yup
      .number()
      .typeError("Age must be a number")
      .required("Age is required")
      .min(18, "Age must be at least 18")
      .max(80, "Age must be less than 80"),

    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^(010|011|012|015)\d{8}$/, "Phone number is not valid"),
  });
  // -------------------------- Yup Schema --------------------------

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // -------------------------- Handle API Errors --------------------------
  const handleApiErrors = (error) => {
    const errorMsg = error?.response?.data?.msg;

    if (errorMsg === "email already exists") {
      setError("email", { type: "server", message: "Email already exists" });
    } else if (errorMsg === "name is required") {
      setError("name", { type: "server", message: "Name is required" });
    } else if (errorMsg === "password is required") {
      setError("password", { type: "server", message: "Password is required" });
    } else if (errorMsg === "age is required") {
      setError("age", { type: "server", message: "Age is required" });
    } else if (errorMsg === "phone is required") {
      setError("phone", { type: "server", message: "Phone is required" });
    } else {
      setError("root", {
        type: "server",
        message: "Something went wrong",
      });
    }
  };
  // -------------------------- Handle API Errors --------------------------

  // -------------------------- On Submit --------------------------
  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://note-sigma-black.vercel.app/api/v1/users/signUp",
        data
      );

      toast.success("Registration successful", { autoClose: 1000 });
      navigate("/login");

    } catch (error) {
      handleApiErrors(error);
    }
  };
  // -------------------------- On Submit --------------------------

  // -------------------------- Styles --------------------------
  const labelStyle = "text-blue-300 font-medium text-2xl";
  const inputStyle =
    "border border-gray-300 rounded-md px-4 py-2 w-full mt-2 dark:text-white";
  const errorStyle = "text-red-500";
  const buttonStyle =
    "bg-blue-300 px-10 text-white py-3 rounded-md self-center cursor-pointer";
  const formStyle = "flex flex-col gap-6";
  // -------------------------- Styles --------------------------

  return (
    <Form title="Register">
      <form onSubmit={handleSubmit(onSubmit)} className={formStyle}>

        {/* NAME */}
        <div>
          <label className={labelStyle}>Name</label>
          <input className={inputStyle} {...register("name")} />
          <p className={errorStyle}>{errors.name?.message}</p>
        </div>

        {/* EMAIL */}
        <div>
          <label className={labelStyle}>Email</label>
          <input className={inputStyle} type="email" {...register("email")} />
          <p className={errorStyle}>{errors.email?.message}</p>
        </div>

        {/* PASSWORD */}
        <div>
          <label className={labelStyle}>Password</label>
          <input
            className={inputStyle}
            type="password"
            {...register("password")}
          />
          <p className={errorStyle}>{errors.password?.message}</p>
        </div>

        {/* AGE */}
        <div>
          <label className={labelStyle}>Age</label>
          <input className={inputStyle} type="number" {...register("age")} />
          <p className={errorStyle}>{errors.age?.message}</p>
        </div>

        {/* PHONE */}
        <div>
          <label className={labelStyle}>Phone</label>
          <input className={inputStyle} {...register("phone")} />
          <p className={errorStyle}>{errors.phone?.message}</p>
        </div>

        {/* SERVER ERROR */}
        {errors.root && (
          <p className={errorStyle}>{errors.root.message}</p>
        )}

        {/* BUTTON */}
        <button className={buttonStyle} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>

      </form>
    </Form>
  );
}
