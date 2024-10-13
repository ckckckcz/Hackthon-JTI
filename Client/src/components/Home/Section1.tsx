export default function Section1(){
    return(
        <section className="bg-center bg-no-repeat bg-[url('https://ppid.polinema.ac.id/wp-content/uploads/2024/02/GRAHA-POLINEMA1-slider-01.webp')] bg-cover bg-gray-700 bg-blend-multiply h-screen flex items-center">
      <div className="px-4 mx-auto max-w-screen-xl text-center">
        <div className="rounded-full p-3 mb-8 flex justify-center items-center mx-auto" style={{ width: "400px", backgroundColor: "rgba(255, 255, 255, 0.07)", borderRadius: "200px", backdropFilter: "blur(5.8px)", border: "1px solid rgba(255, 255, 255, 0.36)"  }}>
          <h4 className="text-gray-300 leading-none font-bold text-2xl mb-1 text-center">
            Jurusan Teknologi Informasi
          </h4>
        </div>  
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Pemberkasan Digital JTI, <span className="text-blue-600">Solusi Cerdas</span> untuk Mahasiswa dan Dosen!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Dengan sistem yang terintegrasi, pengguna dapat mengorganisir berkas dengan lebih baik, mengurangi risiko kehilangan berkas fisik, dan memudahkan pencarian informasi.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
    );
}