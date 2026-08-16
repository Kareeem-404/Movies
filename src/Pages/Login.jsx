import Form from "../components/Ui-components/Form";
import useLogin from "../Hooks/useLogin";

export default function Login() {

    const { register, handleSubmit, onSubmit, errors, isSubmitting } = useLogin();

    // -------------------------- Styles --------------------------
    const labelStyle = "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200";
    const inputStyle =
        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-100 dark:focus:border-brand-400";
    const buttonStyle =
        "mt-2 w-full cursor-pointer rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-500/50 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60";
    const errorStyle = "mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500";
    const formStyle = "flex flex-col gap-5";
    // -------------------------- Styles --------------------------

    return (
        <Form title="Login">
            <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
                {/* -------------------------- Email -------------------------- */}
                <div>
                    <label className={labelStyle} htmlFor="email">Email</label>
                    <input
                        id="email"
                        className={inputStyle}
                        placeholder="you@example.com"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                        <p className={errorStyle}>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.email.message}
                        </p>
                    )}
                </div>
                {/* -------------------------- Email -------------------------- */}

                {/* -------------------------- Password -------------------------- */}
                <div>
                    <label className={labelStyle} htmlFor="password">Password</label>
                    <input
                        id="password"
                        className={inputStyle}
                        type="password"
                        placeholder="********"
                        {...register("password", { required: "password is required" })}
                    />
                    {errors.password && (
                        <p className={errorStyle}>
                            <i className="bi bi-exclamation-circle"></i>
                            {errors.password.message}
                        </p>
                    )}
                </div>
                {/* -------------------------- Password -------------------------- */}

                {/* -------------------------- Server error -------------------------- */}
                {errors.root && (
                    <p className={errorStyle}>
                        <i className="bi bi-exclamation-circle"></i>
                        {errors.root.message}
                    </p>
                )}
                {/* -------------------------- Server error -------------------------- */}

                {/* -------------------------- Button -------------------------- */}
                <button disabled={isSubmitting} className={buttonStyle}>
                    {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
                            Logging in...
                        </span>
                    ) : (
                        "Login"
                    )}
                </button>
                {/* -------------------------- Button -------------------------- */}
            </form>
        </Form>
    )
}

