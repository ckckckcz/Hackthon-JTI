import keadilanBersama from "../assets/img/keadilanBersama.png";
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-card border-2 border-gray-200 rounded-xl shadow-lg p-6 w-96">
        <div className="flex items-center justify-center mb-4">
          <img aria-hidden="true" alt="Flowbite logo" src={keadilanBersama} className="h-auto w-28 mb-2 mt-2" />
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Ingat Saya
            </label>
          </div>
          <button
            type="submit"
            className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Masuk
          </button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground text-center">
          Belum Punya Akun ?{" "}
          <a href="#" className="text-primary hover:underline font-medium text-red-600">
            Buat Akun
          </a>
        </p>
      </div>
    </div>
  );
}
