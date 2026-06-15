function Navbar() {
  return (
    <nav className="w-full bg-bg px-4 py-3 text-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <span className="text-lg font-semibold cursor-pointer hover:text-pink">
          Baltic Dry Index
        </span>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-pink">
            Home
          </a>
          <a href="#" className="hover:text-pink">
            About
          </a>
          <a href="#" className="hover:text-pink">
            Github
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
