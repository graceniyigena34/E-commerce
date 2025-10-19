import { Link } from "react-router-dom";

function Navbar(){
    return (
<nav className="bg-cyan-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Healing<span className="text-yellow-300">Hands</span>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          </div>
          </div>
            </nav>
    )
}
export default Navbar;
