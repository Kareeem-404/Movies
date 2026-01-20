import Form from "../components/Form";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate();


    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const [loading, setLoading] = useState(false)
    const { emailError, passwordError } = errors;

    const handleSubmit = async (e) => {

        const email = emailRef.current.value.trim()
        const password = passwordRef.current.value.trim()

        e.preventDefault()
        if (!email || !password) {
            toast.warning('Fill all the fields',
                {
                    autoClose: 1500
                }
            )
        }
        try {
            setLoading(true)
            const response = await fetch("https://note-sigma-black.vercel.app/api/v1/users/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (data.msg === "email not exist") {
                setErrors({ emailError: "Email not exist", passwordError: "" });
            } else if (data.msg === "invalid password") {
                setErrors({ emailError: "", passwordError: "Password is wrong" });
            } else {
                localStorage.setItem("token", data.token);
                navigate("/home");
                toast.success('Welcome', { autoClose: 1000 });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    // styles
    const labelStyle = "text-blue-300 font-medium text-2xl";
    const inputStyle = "border border-gray-300 rounded-md px-4 py-2 w-full mt-2 dark:text-white";
    const buttonStyle = "bg-blue-300 px-10 text-white py-3 rounded-md self-center cursor-pointer";
    const errorStyle = "text-red-500";
    const formStyle = "flex flex-col gap-6";
    // styles

    return (
        <Form title="Login">
            <form className={formStyle}>
                <div>
                    <label className={labelStyle} htmlFor="email">Email</label>
                    <input id="email" className={inputStyle} type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <p className={errorStyle}>{emailError}</p>
                </div>
                <div>
                    <label className={labelStyle} htmlFor="password">Password</label>
                    <input id="password" className={inputStyle} type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <p className={errorStyle}>{passwordError}</p>
                </div>
                <button disabled={loading} className={buttonStyle} onSubmit={handleSubmit}>{loading ? "loading" : "Login"}</button>
            </form>
        </Form>
    )
}