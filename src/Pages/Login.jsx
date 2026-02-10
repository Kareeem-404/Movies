import Form from "../components/Ui-components/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {

    const navigate = useNavigate();

    const { register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm()

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
        await axios.post(
            "https://note-sigma-black.vercel.app/api/v1/users/signIn",
            data,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            navigate("/home");
            toast.success(`Welcome`, { autoClose: 600 })
        }).catch(error => {
            handleApiErrors(error);
        });
    };
    // -------------------------- On Submit --------------------------

    // -------------------------- Styles --------------------------
    const labelStyle = "text-blue-300 font-medium text-2xl";
    const inputStyle = "border border-gray-300 rounded-md px-4 py-2 w-full mt-2 dark:text-white";
    const buttonStyle = "bg-blue-300 px-10 text-white py-3 rounded-md self-center cursor-pointer";
    const errorStyle = "text-red-500";
    const formStyle = "flex flex-col gap-6";
    // -------------------------- Styles --------------------------

    return (
        <Form title="Login">
            <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
                {/* -------------------------- Email -------------------------- */}
                <div>
                    <label className={labelStyle} htmlFor="email">Email</label>
                    <input id="email" className={inputStyle}
                        {...register("email", {
                            required: "Email is required"
                        })} />
                    <p className={errorStyle}>{errors.email && errors.email.message}</p>
                </div>
                {/* -------------------------- Email -------------------------- */}

                {/* -------------------------- Password -------------------------- */}
                <div>
                    <label className={labelStyle} htmlFor="password">Password</label>
                    <input id="password" className={inputStyle} type="password"
                        {...register("password", {
                            required: "password is required"
                        })}
                    />
                    <p className={errorStyle}>{errors.password && errors.password.message}</p>
                </div>
                {/* -------------------------- Password -------------------------- */}

                {/* -------------------------- Button -------------------------- */}
                <button disabled={isSubmitting} className={buttonStyle}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
                {/* -------------------------- Button -------------------------- */}
            </form>
        </Form>
    )
}
