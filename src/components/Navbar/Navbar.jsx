import { Link } from "react-router-dom";
import logo from "../../assets/images/Selsarf_logo.png"

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to={'/'}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Selsaf Logo"
            />
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to={'/contact'}
              className="text-sm  text-gray-500 dark:text-black hover:underline"
            >
              (233) 241-912520
            </Link>
            <Link
              to={'/signin'}
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to={'/'}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/about'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={'/services'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={'/contact'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
