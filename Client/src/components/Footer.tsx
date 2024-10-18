import keadilanBersama from "../assets/img/keadilanBersama.png";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-20">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="javascript:void(0" className="flex items-center">
              <img src={keadilanBersama} className="h-12 me-3" alt="Keadilan Bersama Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="javascript:void(0" className="hover:underline">
                    React TS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Laravel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                    Github
                  </a>
                </li>{" "}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Developer</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/Lavina-23" className="hover:underline">
                    Lavina
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/ckckckcz" className="hover:underline">
                    Riovaldo Alfiyan Fahmi Rahman
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/HaikalMuhammadRafli" className="hover:underline">
                    Haikal Muhammad Rafli
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="javascript:void(0)" className="hover:underline">
              Keadilan Bersama™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
