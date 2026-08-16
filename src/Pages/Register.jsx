import Form from "../components/Ui-components/Form";
import useRegister from "../Hooks/useRegister";

export default function Register() {

  // -------------------------- Register --------------------------
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useRegister();

  // -------------------------- Styles --------------------------
  const labelStyle = "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200";
  const inputStyle =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-100 dark:focus:border-brand-400";
  const errorStyle = "mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500";
  const buttonStyle =
    "mt-2 w-full cursor-pointer rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-500/50 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60";
  const formStyle = "flex flex-col gap-5";
  // -------------------------- Styles --------------------------

  return (
    <Form title="Register">
      <form onSubmit={handleSubmit(onSubmit)} className={formStyle}>

        {/* NAME */}
        <div>
          <label className={labelStyle}>Name</label>
          <input className={inputStyle} placeholder="John Doe" {...register("name")} />
          {errors.name && (
            <p className={errorStyle}>
              <i className="bi bi-exclamation-circle"></i>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className={labelStyle}>Email</label>
          <input className={inputStyle} type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && (
            <p className={errorStyle}>
              <i className="bi bi-exclamation-circle"></i>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className={labelStyle}>Password</label>
          <input
            className={inputStyle}
            type="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <p className={errorStyle}>
              <i className="bi bi-exclamation-circle"></i>
              {errors.password.message}
            </p>
          )}
        </div>

        {/* AGE */}
        <div>
          <label className={labelStyle}>Age</label>
          <input className={inputStyle} type="number" placeholder="18" {...register("age")} />
          {errors.age && (
            <p className={errorStyle}>
              <i className="bi bi-exclamation-circle"></i>
              {errors.age.message}
            </p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className={labelStyle}>Phone</label>
          <input className={inputStyle} placeholder="01012345678" {...register("phone")} />
          {errors.phone && (
            <p className={errorStyle}>
              <i className="bi bi-exclamation-circle"></i>
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* SERVER ERROR */}
        {errors.root && (
          <p className={errorStyle}>
            <i className="bi bi-exclamation-circle"></i>
            {errors.root.message}
          </p>
        )}

        {/* BUTTON */}
        <button className={buttonStyle} type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
              Registering...
            </span>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </Form>
  );
}

