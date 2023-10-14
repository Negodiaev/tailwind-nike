import { headerLogo } from "../assets/images/index.js";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index.js";

function Nav() {
  return (
    <header className="absolute z-10 padding-x py-8 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={129} height={29} alt="Nike logo" />
        </a>
        <ul className="flex justify-center items-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 font-montserrat text-lg leading-normal font-medium max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="Hamburger" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
