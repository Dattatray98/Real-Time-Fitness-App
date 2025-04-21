const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-500 h-12 w-full flex items-center justify-between px-4">
  <div className="text-white font-semibold text-lg">Your Logo</div>
  <div className="space-x-6">
    <a href="#home" className="text-white hover:text-gray-300">Home</a>
    <a href="#about" className="text-white hover:text-gray-300">About</a>
    <a href="#services" className="text-white hover:text-gray-300">Services</a>
    <a href="#more" className="text-white hover:text-gray-300">More</a>
  </div>
</nav>
    </>
  )
}

export default Navbar
