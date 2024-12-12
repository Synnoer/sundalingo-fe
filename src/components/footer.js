import Link from 'next/link';
import Image from 'next/image'; 
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Youtube from '../../public/youtube.svg'
import Twitter from '../../public/twitter.svg'

export default function MainFooter() {
    return (
        <div className="bg-[#111538]">
            <div className="py-6 px-16">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-24">
                    <div className="">
                        <h1 className="font-['Poppins-Bold',_sans-serif] text-5xl font-bold text-indigo-600">
                            Sunda
                            <span className="text-white">Lingo</span>
                        </h1>
                        <p className="text-white text-sm leading-[26px] font-light mt-2">
                            SundaLingo adalah aplikasi berbasis website untuk menerjemahkan teks
                            Aksara Sunda ke dalam teks Latin dengan fitur Text Recognition.
                            SundaLingo hadir untuk membantu orang-orang, terutama masyarakat
                            Sunda untuk memahami teks Aksara Sunda.
                        </p>
                    </div>
                    {/* <div>
                        <h2 className="text-white text-2xl font-bold mb-2">About</h2>
                        <ul className="text-white text-base leading-10">
                            <li>Menu</li>
                            <li>Features</li>
                            <li>News & Blogs</li>
                            <li>Help & Supports</li>
                        </ul>
                    </div>
                    <div className="text-[#ffffff] text-2xl">
                        <h2 className="text-white text-2xl font-bold mb-2">Company</h2>
                        <ul className="text-white text-base leading-10">
                            <li>How we work</li>
                            <li>Term of Service</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                    </div> */}
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                        <ul className="text-base space-y-2">
                            <li>Jl. A.H. Nasution No.105, Cipadung Wetan, Kec. Cibiru, Kota Bandung, Jawa Barat 40614</li>
                            <li>+62 896 7016 9478</li>
                            <li>dimas.yans338@gmail.com</li>
                            <li>www.sundalingo.com</li>
                        </ul>
                    </div>
                </div>
            </div>
                {/* Row 2 */}
                <div className="flex gap-2 px-16 pb-6">
                    <div>
                        <a href="https://facebook.com" target="blank">
                            <Image
                            src={Facebook}
                            width={25}
                            height={25}
                            alt="facebook"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://instagram.com" target="blank">
                            <Image
                            src={Instagram}
                            width={25}
                            height={25}
                            alt="instagram"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="htTps://youtube.com" target="blank">
                            <Image
                            src={Youtube}
                            width={25}
                            height={25}
                            alt="youtube"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://x.com" target="blank">
                            <Image
                            src={Twitter}
                            width={25}
                            height={25}
                            alt="ttwitter"
                            />
                        </a>
                    </div>
                </div>
        </div>
    );
}