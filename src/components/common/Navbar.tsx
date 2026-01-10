import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  {
    name: "Our Products",
    path: "/products",
    hasDropdown: true,
    dropdownItems: [
      { name: "Factorial", path: "/products/factorial" },
      { name: "Bree AI", path: "/products/bree-ai" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-white border-b border-amber-200 sticky top-0 z-50 ">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/logo.jpg"
              alt="360 Recruit Logo"
              className="h-20 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                        >
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
            >
              Get started
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="py-6 space-y-1">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="space-y-1">
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 active:bg-gray-100 font-medium rounded-lg transition-colors duration-150"
                        >
                          <span className="text-base">{link.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              isProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-gray-50 rounded-lg mx-2"
                            >
                              <div className="py-2">
                                {link.dropdownItems?.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={`block px-6 py-3 text-sm font-medium transition-colors duration-150 ${
                                      location.pathname === item.path
                                        ? "text-yellow-600 bg-yellow-50"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-white active:bg-gray-100"
                                    }`}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 font-medium text-base rounded-lg transition-colors duration-150 ${
                        location.pathname === link.path
                          ? "text-gray-900 bg-yellow-50"
                          : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-6 px-4 border-t border-gray-100 mt-4">
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="block text-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-semibold px-6 py-3.5 rounded-full shadow-sm transition-all duration-200 text-base"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
