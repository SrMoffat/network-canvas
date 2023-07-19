const LoginContent = () => (
    <section>
        <div className="flex flex-col items-center justify-center py-6">
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Login to account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        <button type="submit" className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to account</button>
                        <p className="text-sm font-light">
                            Don't have an account? <a href="/auth/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default LoginContent