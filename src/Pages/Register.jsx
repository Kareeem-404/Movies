import Form from "../components/Form"
import { useState, useMemo } from "react";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        ageError: "",
        phoneError: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (nameError || emailError || passwordError || ageError || phoneError) {
                return;
            }
            const response = await fetch("https://note-sigma-black.vercel.app/api/v1/users/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    // regex
    const nameRegex = /^[a-zA-z]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\W])[A-Za-z\d.\W]{8,}$/;
    const ageRegex = /^(1[8-9]|[2-7]\d|80)$/;
    const phoneRegex = /^(010|011|012|015)\d{8}$/;
    // regex

    // styles
    const labelStyle = "text-blue-300 font-medium text-2xl";
    const inputStyle = "border border-gray-300 rounded-md px-4 py-2 w-full mt-2 dark:text-white";
    const errorStyle = "text-red-500";
    const buttonStyle = "bg-blue-300 px-10 text-white py-3 rounded-md self-center cursor-pointer";
    // styles

    const { nameError, emailError, passwordError, ageError, phoneError } = errors;
    const { name, email, password, age, phone } = user;

    const nameValidation = useMemo(() => {
        if (name == "") {
            setErrors({ ...errors, nameError: "" });
        } else if (!nameRegex.test(name)) {
            setErrors({ ...errors, nameError: "Name must be at least 3 characters long" });
        } else {
            setErrors({ ...errors, nameError: "" });
        }
    }, [name]);

    const emailValidation = useMemo(() => {
        if (email == "") {
            setErrors({ ...errors, emailError: "" });
        } else if (!emailRegex.test(email)) {
            setErrors({ ...errors, emailError: "Email is not valid" });
        } else {
            setErrors({ ...errors, emailError: "" });
        }
    }, [email]);

    const passwordValidation = useMemo(() => {
        if (password == "") {
            setErrors({ ...errors, passwordError: "" });
        } else if (!passwordRegex.test(password)) {
            setErrors({ ...errors, passwordError: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character" });
        } else {
            setErrors({ ...errors, passwordError: "" });
        }
    }, [password]);

    const ageValidation = useMemo(() => {
        if (age == "") {
            setErrors({ ...errors, ageError: "" });
        } else if (!ageRegex.test(age)) {
            setErrors({ ...errors, ageError: "Age must be between 18 and 80" });
        } else {
            setErrors({ ...errors, ageError: "" });
        }
    }, [age]);

    const phoneValidation = useMemo(() => {
        if (phone == "") {
            setErrors({ ...errors, phoneError: "" });
        } else if (!phoneRegex.test(phone)) {
            setErrors({ ...errors, phoneError: "Phone number must be 11 digits long and start with 010, 011, 012, or 015" });
        } else {
            setErrors({ ...errors, phoneError: "" });
        }
    }, [phone]);

    return (
        <Form title="Register">
            <div>
                <label className={labelStyle} htmlFor="name">Name</label>
                <input className={inputStyle} type="text" id="name" onChange={(e) => setUser({ ...user, name: e.target.value.trim() })} />
                <p className={errorStyle}>
                    {nameError}
                </p>
            </div>
            <div>
                <label className={labelStyle} htmlFor="email">Email</label>
                <input className={inputStyle} type="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value.trim() })} />
                <p className={errorStyle}>
                    {emailError}
                </p>
            </div>
            <div>
                <label className={labelStyle} htmlFor="password">Password</label>
                <input className={inputStyle} type="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value.trim() })} />
                <p className={errorStyle}>
                    {passwordError}
                </p>
            </div>
            <div>
                <label className={labelStyle} htmlFor="age">Age</label>
                <input className={inputStyle} type="number" id="age" onChange={(e) => setUser({ ...user, age: e.target.value.trim() })} />
                <p className={errorStyle}>
                    {ageError}
                </p>
            </div>
            <div>
                <label className={labelStyle} htmlFor="phone">Phone</label>
                <input className={inputStyle} type="number" id="phone" onChange={(e) => setUser({ ...user, phone: e.target.value.trim() })} />
                <p className={errorStyle}>
                    {phoneError}
                </p>
            </div>
            <button className={buttonStyle} onClick={handleSubmit}>Register</button>
        </Form>
    )
}