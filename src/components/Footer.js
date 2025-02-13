const Footer = () => {
  return (
    <footer className="py-10 mt-10 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-400">
              Instamart is your one-stop solution for fresh groceries, daily essentials, and much more. Delivering happiness and convenience right to your doorstep.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:underline">About Us</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:underline">Careers</a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:underline">Our Products</a>
              </li>
              <li>
                <a href="/ faq" className="text-gray-400 hover:underline">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@instamart.com</li>
              <li>Phone: +91 12345 67890</li>
              <li>Address: 123, Food Street, Indore, MP</li>
            </ul>
          </div>

          {/* Social Media & Download Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex mb-6 space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>

            <h3 className="mb-4 text-lg font-semibold">Download Our App</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-32">
                <img src="/images/google-play-badge.png" alt="Google Play Store" />
              </a>
              <a href="#" className="w-32">
                <img src="/images/app-store-badge.png" alt="Apple App Store" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-8 text-sm text-center text-gray-500 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Instamart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
