import Image from "next/image";
import Maskot from "~/img/maskot.png";
import Agiz from "~/img/agiz.png";
import MainHeader from "~/components/mainheader";
import MainFooter from "~/components/footer";
import { useRouter } from "next/router";
import '~/styles/globals.css'; 


export default function Home() {
  const router = useRouter();
  
  const detectPage = () => {
    router.push ('/detect');
  }
  
  return (
    <div className="bg-white text-gray-800">
      <MainHeader />
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
              <a href="/detect" className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
                AYO MULAI
              </a>
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
        {/* <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unggah Fotomu Di Sini
            </h2>
            <p className="text-gray-600 mb-6">
              Pastikan foto yang diunggah tidak mengalami blur atau coretan di
              tulisannya.
            </p>
            <div>
              <button onClick={detectPage} className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold mb-4">
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
        </section> */}
        <section className="bg-yellow-500 pt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Cara Penggunaan
              <span className="text-blue-600">Aplikasi</span>
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Ikuti langkah-langkah penggunaan aplikasi Sundalingo untuk
              mempermudah proses penerjemahan Aksara Sunda ke dalam bentuk Latin
            </p>
            <div className="flex lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  alt="People in a classNameroom"
                  className=" rounded-lg"
                  src={Agiz}
                  width="50%"
                />
              </div>
              <div className="lg:w-1/2 mt-8 lg:pl-12">
                <h1 className="text-6xl font-bold text-gray-800 mb-4 ml-4">
                  Panduan Penggunaan
                </h1>
                <p className="mb-4 ml-4 mr-4">
                  Mari ikuti langkah - langkah berikut untuk menambah ilmu dan
                  wawasan yang lebih banyak kawan
                </p>
                <div className=" p-4 rounded-md mr-4 mt-4 mb-4">
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
      <MainFooter />
    </div>
  );
}
