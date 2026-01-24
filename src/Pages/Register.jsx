import Form from "../components/Form";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // -------------------------- Handle API Errors --------------------------
  const handleApiErrors = (error) => {
    const errorMsg = error.msg;
    if (errorMsg === "email already exists") {
      setError("email", {
        type: "server",
        message: "Email already exists"
      })
    } else if (errorMsg === "name is required") {
      setError("name", {
        type: "server",
        message: "Name is required"
      })
    } else if (errorMsg === "password is required") {
      setError("password", {
        type: "server",
        message: "Password is required"
      })
    } else if (errorMsg === "age is required") {
      setError("age", {
        type: "server",
        message: "Age is required"
      })
    } else if (errorMsg === "phone is required") {
      setError("phone", {
        type: "server",
        message: "Phone is required"
      })
    }
  }
  // -------------------------- Handle API Errors --------------------------

  // -------------------------- On Submit --------------------------
  const onSubmit = async (data) => {
    try {
      const response = fetch("https://note-sigma-black.vercel.app/api/v1/users/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      handleApiErrors(error)
    }
  }
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
        {/* -------------------------- Name -------------------------- */}
        <div>
          <label className={labelStyle}>Name</label>
          <input
            className={inputStyle}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          <p className={errorStyle}>{errors.name?.message}</p>
        </div>
        {/* -------------------------- Name -------------------------- */}


        {/* -------------------------- Email -------------------------- */}
        <div>
          <label className={labelStyle}>Email</label>
          <input
            className={inputStyle}
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is not valid",
              },
            })}
          />
          <p className={errorStyle}>{errors.email?.message}</p>
        </div>
        {/* -------------------------- Email -------------------------- */}

        {/* -------------------------- Password -------------------------- */}
        <div>
          <label className={labelStyle}>Password</label>
          <input
            className={inputStyle}
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\W])[A-Za-z\d.\W]{8,}$/,
                message:
                  "Password must contain uppercase, lowercase, number & special character",
              },
            })}
          />
          <p className={errorStyle}>{errors.password?.message}</p>
        </div>
        {/* -------------------------- Password -------------------------- */}

        {/* -------------------------- Age -------------------------- */}
        <div>
          <label className={labelStyle}>Age</label>
          <input
            className={inputStyle}
            type="number"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "Age must be at least 18",
              },
              max: {
                value: 80,
                message: "Age must be less than 80",
              },
            })}
          />
          <p className={errorStyle}>{errors.age?.message}</p>
        </div>
        {/* -------------------------- Age -------------------------- */}

        {/* -------------------------- Phone -------------------------- */}
        <div>
          <label className={labelStyle}>Phone</label>
          <input
            className={inputStyle}
            type="text"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^(010|011|012|015)\d{8}$/,
                message: "Phone number is not valid",
              },
            })}
          />
          <p className={errorStyle}>{errors.phone?.message}</p>
        </div>
        {/* -------------------------- Phone -------------------------- */}

        {/* -------------------------- Button -------------------------- */}
        <button className={buttonStyle} type="submit">
          Register
        </button>
        {/* -------------------------- Button -------------------------- */}
      </form>
    </Form>
  );
}
