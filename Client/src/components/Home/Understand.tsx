import confuse from "../../assets/img/confuse.png";

export default function Understand() {
  return (
    <section className="bg-white dark:bg-gray-900 flex items-center justify-center py-8 px-4">
      <div className="text-center mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white underCard border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
          <style>{`
        @media (min-width: 640px) {
          .underCard {
            width: 100%;
          }
        }
        @media (min-width: 1024px) {
          .underCard {
            width: 1200px;
          }
        }
      `}</style>
          <div className="flex flex-col items-start justify-center p-5 sm:p-10 text-left">
            <p className="font-bold text-xl mb-2 text-red-600">Tahukah kalian ?</p>
            <h5 className="mb-2 text-4xl font-extrabold text-gray-900 dark:text-white">Seberapa Paham Kamu Dengan Hukum ?</h5>
            <p className="mb-5 text-sm font-medium text-gray-500 sm:text-lg dark:text-gray-400">
              Untuk membuat keputusan yang tepat, kita harus memahami permasalahan hukum dan profil yurisdiksi agar dapat memilih perwakilan atau solusi hukum yang sesuai.
            </p>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Pelajari Hukum
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img src={confuse} alt="App preview" className="h-auto min-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
