import { MdOutlineMenu } from "react-icons/md";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <nav className="px-8 py-4 flex justify-between items-center">
          <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
          <div className="md:flex hidden items-center gap-6">
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5  border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black "
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-600 px-2 py-1.5  border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black "
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5  border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Changelog
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5  border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5  border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Download
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5  border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Contact
            </a>
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg text-white font-medium 
                    bg-gradient-to-r from-[#6A5AE0] to-[#9B5DE5] shadow-md 
                    hover:opacity-90 hover:text-black transition-all duration-500 ease-in-out"
            >
              <span className="text-xl">+</span>
              New Ticket
            </button>
          </div>
          <div className="block md:hidden">
            <MdOutlineMenu />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
