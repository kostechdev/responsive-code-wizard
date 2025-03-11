
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-extrabold text-xl">ORELY</span>
              <span className="font-bold text-xl">PODCAST</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              Discover fascinating stories and diverse perspectives from around the world.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-md mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/episodes" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Episodes</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Categories</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Blog</Link></li>
              <li><Link to="/plans" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-md mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/advertise" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Advertise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-md mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} ORELYPODCAST. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/terms" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Privacy</Link></li>
                <li><Link to="/cookies" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
