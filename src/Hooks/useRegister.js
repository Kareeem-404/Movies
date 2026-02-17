import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const useRegister = () => {

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

    const navigate = useNavigate();
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
    } else {
      setError("root", { type: "server", message: "Something went wrong" });
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

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
};

export default useRegister;