export default function Error() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Selamat Datang di Ketidakpastian!</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Halaman ini tidak dapat ditemukan. Namun, banyak yang bisa ditemukan di halaman utama kami.</p>
          <a
            href="/"
            className="inline-flex text-red-600 font-bold bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-md border border-gray-200 px-5 py-3 text-center dark:focus:ring-red-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
