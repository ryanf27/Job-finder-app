const Navbar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blue3Color">
          <strong>Job</strong>Finder
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">jobs</li>
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">
          About
        </li>
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">Blog</li>
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">
          Login
        </li>
        <li className="menuList text-[#6f6f6f6] hover:text-blue3Color">
          Register
        </li>
      </div>
    </div>
  );
};

export default Navbar;
