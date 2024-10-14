import user1 from "../../assets/img/users/user1.jpg";
import user2 from "../../assets/img/users/user2.jpg";
import user3 from "../../assets/img/users/user3.jpg";
import threePeople from "../../assets/img/3people.png";

export default function Header() {
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-left items-left lg:items-center lg:justify-center" style={{ height: "500px" }}>
      <div className="py-8 px-4 text-center mx-auto max-w-screen-xl relative">
        <style>{`
          .threePeople{
            margin-top: 665px;
          }
            @media(max-width: 767px){
              .threePeople{
                margin-top:545px;
              }
            }
        `}</style>
        <div className="flex -space-x-4 rtl:space-x-reverse items-left justify-left lg:justify-center lg:items-center mb-4">
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src={user1} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src={user2} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src={user3} alt="" />
          <div className="flex items-center ml-2">
            <a className="flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full hover:bg-red-600 dark:border-gray-800" href="#">
              +99
            </a>
            <span className="ml-2 text-md font-bold text-black dark:text-gray-300 lg:text-center text-left">Pelanggan Puas</span>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white lg:text-center text-left">
          Bersama Kami, Anda Tidak Sendirian dalam Menghadapi Masalah <span className="text-red-700">Hukum</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl lg:px-48 dark:text-gray-400 lg:text-center text-left">
          Kami menawarkan layanan hukum di berbagai bidang, termasuk hukum keluarga, hukum bisnis, hukum pidana, dan banyak lagi.
        </p>
        <div className="flex justify-left lg:justify-center space-x-4 mb-8">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
            Konsultasi
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            LegalMind
          </a>
        </div>
        {/* Gambar dengan posisi absolute untuk meratakannya di tengah */}
        <div className="absolute inset-0 flex justify-center items-center threePeople">
          <img className="h-auto filter grayscale" src={threePeople} alt="" />
        </div>
      </div>
    </section>
  );
}
