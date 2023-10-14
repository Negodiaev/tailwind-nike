import { socialMedia, footerLinks } from "../constants/index.js";
import { footerLogo } from "../assets/images/index.js";
import { copyrightSign } from "../assets/icons/index.js";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between items-start gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="Nike logo" />
          </a>
          <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(({ src, alt }) => (
              <div
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white"
                key={alt}
              >
                <img src={src} width={24} height={24} alt={alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-6 font-montserrat text-2xl leading-normal font-medium text-white">
                {title}
              </h4>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400"
                    key={name}
                  >
                    <a
                      href={link}
                      className="cursor-pointer hover:underline hover:underline-offset-2"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="mt-0 rounded-full"
            alt="Copyright sign"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms &amp; Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
