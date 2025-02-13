import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between px-8 py-4 border-b shadow-sm">
      <Title />
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 font-medium text-gray-600">
          <Link to="/">
            <li className="transition hover:text-black">Home</li>
          </Link>
          <Link to="/about">
            <li className="transition hover:text-black">About</li>
          </Link>
          <Link to="/contact">
            <li className="transition hover:text-black">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="flex items-center transition hover:text-black">
              instamart
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center transition hover:text-black">
               Cart - {cartItem.length} items
            </li>
          </Link>
        </ul>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 transition hover:text-black">
            Login
          </span>
          <span className="text-green-500">●</span>
        </div>
      </div>
    </div>
  );
};

export const Title = () => (
  <a href="/" className="flex items-center space-x-2">
    <img
      className="w-auto h-12"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      alt="Logo"
    />
    <span className="text-xl font-bold text-black">
      <span className="text-black">Food</span>{" "}
      <span className="text-orange-500">Fire</span>
    </span>
  </a>
);

export default Header;
