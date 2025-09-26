import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import Container from "../Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <nav className="px-8 py-4 flex justify-between items-center relative">
          {/* Logo */}
          <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>

          {/* Desktop Menu */}
          <div className="md:flex hidden items-center gap-6">
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5 border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5 border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5 border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Changelog
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5 border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5 border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Download
            </a>
            <a
              href="#"
              className="text-gray-600 px-2 py-1.5 border-b-2 border-transparent 
                        transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
            >
              Contact
            </a>
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg text-white font-medium 
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-md 
                    hover:opacity-90 hover:text-black transition-all duration-500 ease-in-out"
            >
              <span className="text-xl">+</span>
              New Ticket
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="block md:hidden">
            {isOpen ? (
              <MdClose
                size={28}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <MdOutlineMenu
                size={28}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 md:hidden z-50">
              <a
                href="#"
                className="text-gray-600 border-b-2 border-transparent 
                          transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 border-b-2 border-transparent 
                          transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-600 border-b-2 border-transparent 
                          transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
              >
                Changelog
              </a>
              <a
                href="#"
                className="text-gray-600 border-b-2 border-transparent 
                          transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 border-b-2 border-transparent 
                          transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
              >
                Download
              </a>
              <a
                href="#"
                className="text-gray-600 border-b-2 border-transparent 
                          transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-black"
              >
                Contact
              </a>
              <button
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-white font-medium 
                      bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-md 
                      hover:opacity-90 hover:text-black transition-all duration-500 ease-in-out"
              >
                <span className="text-xl">+</span>
                New Ticket
              </button>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
