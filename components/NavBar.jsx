import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-teal-600 p-6 fixed w-full mb-6 z-10 top-0">
      <div className="flex items-center justify-start text-white mr-6">
        <span className="font-semibold border rounded-2xl text-xl tracking-tight">
          NEWSAPP
        </span>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-lg flex">
          <Link href="/" className="block mt-4 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link href="/" className="block mt-4 text-teal-200 hover:text-white mr-4">
            About
          </Link>
          <Link href="/" className="block mt-4 text-teal-200 hover:text-white mr-4">
            Contact
          </Link>
          <Link href="/login" className="block mt-4 text-teal-200 hover:text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
