export default function MainHeader() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-4xl font-bold text-indigo-600">
                    Sunda<span className="text-black">Lingo</span>
                </div>
                <nav className="flex-1 flex justify-center space-x-6 ml-[-15%]">
                    <a className="text-black hover:text-indigo- font-bold" href="/">
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
    )
}