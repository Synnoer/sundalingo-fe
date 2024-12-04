import Image from "next/image";
import Maskot from "../img/maskot.png";
import Agiz from "../img/agiz.png";

export default function Home() {
  return (
    <body className="bg-white text-gray-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-4xl font-bold text-indigo-600">
            Sunda<span className="text-black">Lingo</span>
          </div>
          <nav className="flex-1 flex justify-center space-x-6 ml-[-15%]">
            <a className="text-black hover:text-indigo- font-bold" href="#">
              Home
            </a>
            <a className="text-gray-600 hover:text-indigo- font-bold" href="#">
              Service
            </a>
            <a className="text-gray-600 hover:text-indigo- font-bold" href="#">
              Tutorial
            </a>
            <a className="text-gray-600 hover:text-indigo- font-bold" href="#">
              About Us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                Lestarikan
                <span className="text-blue-600"> Budaya Sunda </span>
                di Lingkunganmu, deteksi
                <span className="text-blue-600"> Aksara Sunda </span>
                yang Ada di Sekitarmu.
                <strong className="text-blue-600">
                  {" "}
                  Sunda<strong className="text-black">Lingo</strong>{" "}
                </strong>
                Bersedia Membantu
              </h1>
              <p className="text-gray-600 mb-6">
                Unggah Aksara Sunda yang ada di sekitarmu. Dengan SundaLingo,
                kamu bisa mengetahui artinya
              </p>
              <button className="bg-yellow-400 text-white px-6 py-3 rounded-full font-bold">
                AYO MULAI
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <Image
                alt="Illustration of a person giving a thumbs up"
                className="w-3/4"
                height="400"
                src={Maskot}
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="bg-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 flex justify-around">
            <div className="text-center">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-lg">Total Aksara</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-lg">Total Pengguna</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">250+</div>
              <div className="text-lg">Total Kosakata</div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unggah Fotomu Di Sini
            </h2>
            <p className="text-gray-600 mb-6">
              Pastikan foto yang diunggah tidak mengalami blur atau coretan di
              tulisannya.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold mb-4">
                Terjemahkan
              </button>
            </div>
            <div className="bg-white shadow-md rounded-lg py-40 px-80 inline-block">
              <div className="border-dashed border-4 border-gray-300 p-8">
                <i className="fas fa-upload text-4xl text-gray-400"></i>
                <p className="text-gray-400 mt-4">Upload file</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-yellow-500 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Cara Penggunaan
              <span className="text-blue-600">Aplikasi</span>
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Ikuti langkah-langkah penggunaan aplikasi Sundalingo untuk
              mempermudah proses penerjemahan Aksara Sunda ke dalam bentuk Latin
            </p>
            <div className="flex lg:flex-row items-center">
              <div className="lg:w-1/2">
                <Image
                  alt="People in a classNameroom"
                  className=" rounded-lg shadow-md"
                  src={Agiz}
                  width="50%"
                />
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
                <h1 className="text-6xl font-bold text-gray-800 mb-4 ml-4">
                  Panduan Penggunaan
                </h1>
                <p className="mb-4 ml-4 mr-4">
                  Mari ikuti langkah - langkah berikut untuk menambah ilmu dan
                  wawasan yang lebih banyak kawan
                </p>
                <div className=" p-4 rounded-md shadow-md mr-4 mt-4 mb-4">
                  <ul className="space-y-4">
                    <li className="flex items-start bg-white rounded-lg p-2">
                      <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                        01
                      </span>
                      <span className="text-xl font-bold">
                        Pilih Foto/Gambar
                      </span>
                    </li>
                    <li className="flex items-start bg-white rounded-lg p-2">
                      <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                        02
                      </span>
                      <span className="text-xl font-bold">Unggah Foto</span>
                    </li>
                    <li className="flex items-start bg-white rounded-lg p-2">
                      <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                        03
                      </span>
                      <span className="text-xl font-bold">
                        Klik Terjemahkan
                      </span>
                    </li>
                    <li className="flex items-start bg-white rounded-lg p-2">
                      <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                        04
                      </span>
                      <span className="text-xl font-bold">
                        Hasil akan muncul
                      </span>
                    </li>
                    <li className="flex items-start bg-white rounded-lg p-2">
                      <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                        05
                      </span>
                      <span className="text-xl font-bold">
                        Selamat mencoba kembali
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tentang
              <span className="text-blue-600">Kami</span>
            </h2>
            <div className="bg-gradient-to-r from-[#525FE1] to-[#2E3899] shadow-md rounded-lg p-8 inline-block">
              <p className="text-white mb-6">
                Sundalingo adalah aplikasi berbasis website untuk menerjemahkan
                teks Aksara Sunda ke dalam teks latin dengan fitur text
                recognition. Sundalingo hadir untuk membantu orang-orang
                terutama masyarakat Sunda untuk memahami teks Aksara Sunda.
              </p>
              <div className="flex items-center justify-center">
                <img
                  alt="Person's portrait"
                  className="rounded-full w-24 h-24 mr-4"
                  height="100"
                  src="https://storage.googleapis.com/a1aa/image/IN1VgfIjQK0KMiyDUfFAusvXQUB6Q1rkVwSaM6dZ0loQ4K3TA.jpg"
                  width="100"
                />
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    DIMAS ARYA NURHAKIM
                  </div>
                  <div className="text-gray-800">INDONESIA</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="text-2xl font-bold mb-4">SundaLingo</div>
            <div className="flex space-x-4 mt-4">
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Menu
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  News &amp; Blogs
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Help &amp; Supports
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  How we work
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Terms of service
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-8 mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Jl. A.H. Nasution no105, Cicaheum Wetan, Kec. Cibeunying Kidul
              Bandung, Jawa Barat 40164
            </p>
            <p className="text-gray-400">+62 896 7016 8478</p>
            <p className="text-gray-400">dimas.yasin358@gmail.com</p>
            <p className="text-gray-400">www.sundalingo.com</p>
          </div>
        </div>
      </footer>
    </body>
  );
}
