import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useLogin = () => {
    const navigate = useNavigate();

    // -------------------------- yup Schema --------------------------

    const loginSchema = yup.object({
        email: yup
            .string()
            .trim()
            .required("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is not valid")
    });
    // -------------------------- yup Schema --------------------------

    const { register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm({
        resolver: yupResolver(loginSchema)
    })

    // -------------------------- Handle API Errors --------------------------
    const handleApiErrors = (error) => {
        const errorMsg = error?.response?.data?.msg;

        if (errorMsg === "email not exist") {
            setError("email", {
                type: "server",
                message: "Email does not exist"
            });
        } else if (errorMsg === "invalid password") {
            setError("password", {
                type: "server",
                message: "Incorrect password"
            });
        } else {
            setError("root", {
                type: "server",
                message: "Something went wrong, try again"
            });
        }
    };
    // -------------------------- Handle API Errors --------------------------

    // -------------------------- On Submit --------------------------
    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "https://note-sigma-black.vercel.app/api/v1/users/signIn",
                data
            );

            localStorage.setItem("token", res.data.token);
            navigate("/home");
            toast.success("Welcome", { autoClose: 600 });

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
        isSubmitting
    };
};

export default useLogin;