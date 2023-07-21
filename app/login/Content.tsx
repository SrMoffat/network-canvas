import LoginForm from "./Form";

const LoginContainer = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Login to Account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
};

const LoginContent = () => {
  return (
    <LoginContainer />
  )
};

export default LoginContent;