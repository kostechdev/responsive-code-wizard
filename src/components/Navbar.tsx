
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Episodes', path: '/episodes' },
    { name: 'Categories', path: '/categories' },
    { name: 'Blog', path: '/blog' },
    { name: 'Features', path: '/features' },
    { name: 'Plans', path: '/plans' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 w-full',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="app-container flex items-center justify-between">
        <Link 
          to="/" 
          className="font-bold text-xl tracking-tight text-black transition-all hover:opacity-80"
        >
          <span className="font-extrabold">ORELY</span>PODCAST
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="gap-1.5 text-gray-600">
            <Globe className="h-4 w-4" />
            <span>EN</span>
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            Get the App
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-2xl animate-fade-in">
          <div className="p-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block px-4 py-2 text-base font-medium rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <Button variant="ghost" size="sm" className="gap-1.5 text-gray-600">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                Get the App
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
