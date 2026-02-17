import Form from "../components/Ui-components/Form";
import useRegister from "../Hooks/useRegister";

export default function Register() {

  // -------------------------- Register --------------------------
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useRegister();

  // -------------------------- Styles --------------------------
  const labelStyle = "text-blue-300 font-medium text-2xl";
  const inputStyle = "border border-gray-300 rounded-md px-4 py-2 w-full mt-2 dark:text-white";
  const errorStyle = "text-red-500";
  const buttonStyle = "bg-blue-300 px-10 text-white py-3 rounded-md self-center cursor-pointer";
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
