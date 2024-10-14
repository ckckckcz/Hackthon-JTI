export default function Tips() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center sectionTips py-8 px-4">
      <div className="text-center mx-auto max-w-screen-xl">
        <style>{`
          .sectionTips{
            margin-top: 517px;
          }
          @media(max-width: 767px){
            .sectionTips{
              margin-top:180px;
            }
          }
        `}</style>
        <h1 className="mt-10 mb-12 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          3 Cara untuk <span className="text-red-600 dark:text-red-500">Memilih Pengacara</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 text-left">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Riset Online</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cari pengacara melalui berbagai situs hukum terpercaya atau platform ulasan online yang menyediakan informasi mengenai pembahasan hukum.</p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rekomendasi</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tanyakan rekomendasi kepada teman atau keluarga yang pernah menggunakan jasa pengacara. Pengalaman langsung dapat menjadi sumber yang terpercaya.</p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asosiasi Hukum</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hubungi asosiasi pengacara lokal yang dapat merekomendasikan pengacara berdasarkan kebutuhan Anda. Mereka memiliki daftar pengacara terverifikasi.</p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
