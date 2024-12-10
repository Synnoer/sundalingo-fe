export default function MainFooter() {
    return (
        <div className="bg-[#111538]">
            <div className="grid grid-rows-2 gap-4 p-6">
                {/* Row 1 */}
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <h1 className="font-['Poppins-Bold',_sans-serif] text-[62px] font-bold text-indigo-600">
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
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-2">About</h2>
                        <ul className="text-white text-base leading-10">
                            <li>Menu</li>
                            <li>Features</li>
                            <li>News & Blogs</li>
                            <li>Help & Supports</li>
                        </ul>
                    </div>
                    <div className="col-span-2 text-[#ffffff] text-2xl font-bold">
                        <h2 className="text-white text-2xl font-bold mb-2">Company</h2>
                        <ul className="text-white text-base leading-10">
                            <li>How we work</li>
                            <li>Term of Service</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-2">Contact Us</h2>
                        <ul className="text-white text-base leading-10">
                            <li>Jl. A.H. Nasution No.105, Cipadung Wetan, Kec. Cibiru, Kota Bandung, Jawa Barat 40614</li>
                            <li>+62 896 7016 9478</li>
                            <li>dimas.yans338@gmail.com</li>
                            <li>www.sundalingo.com</li>
                        </ul>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="flex gap-2">
                    <div>FB</div>
                    <div>IG</div>
                    <div>YT</div>
                    <div>Tweeter</div>
                </div>
            </div>
        </div>
    );
}