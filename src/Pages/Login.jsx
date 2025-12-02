import Form from "../components/Form";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const { email, password } = user;
    const { emailError, passwordError } = errors;


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://note-sigma-black.vercel.app/api/v1/users/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if(data.msg == "email not exist") {
                setErrors({ ...errors, emailError: "Email not exist" });
            } else if(data.msg == "invalid password") {
                setErrors({ ...errors, passwordError: "Password is wrong" });
            } else {
                navigate("/home");
                localStorage.setItem("token", data.token);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // styles
    const labelStyle = "text-blue-300 font-medium text-2xl";
    const inputStyle = "border border-gray-300 rounded-md px-4 py-2 w-full mt-2";
    const buttonStyle = "bg-blue-300 px-10 text-white py-3 rounded-md self-center cursor-pointer";
    const errorStyle = "text-red-500";
    // styles

    return (
        <Form title="Login">
            <div>
                <label className={labelStyle} htmlFor="email">Email</label>
                <input id="email" className={inputStyle} type="email" onChange={(e) => setUser({ ...user, email: e.target.value.trim() })} />
                <p className={errorStyle}>{emailError}</p>
            </div>
            <div>
                <label className={labelStyle} htmlFor="password">Password</label>
                <input id="password" className={inputStyle} type="password" onChange={(e) => setUser({ ...user, password: e.target.value.trim() })} />
                <p className={errorStyle}>{passwordError}</p>
            </div>
            <button className={buttonStyle} onClick={handleSubmit}>Login</button>
        </Form>
    )
}