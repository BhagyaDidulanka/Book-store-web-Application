import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

export const Header = () => {
  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-20" alt="Book-Store Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BOOK-STORE</span>
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <span className="text-xl text-gray-700 cursor-pointer dark:text-white bi bi-gear-wide-connected" ></span>
                    <span className="mr-5 text-xl text-gray-700 cursor-pointer dark:text-white bi bi-search" ></span>
                    <span className="mr-5 text-xl text-gray-700 cursor-pointer dark:text-white bi bi-cart3" ></span>
                    <span className="mr-5 text-xl text-gray-700 cursor-pointer dark:text-white bi bi-person-circle" ></span>
                </div>
            </div>
        </nav>
    </header>
  )
}
