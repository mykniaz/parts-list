import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export const Footer = (): JSX.Element => {
  return (
    <footer className="mt-16 p-4 bg-gray-100">
      <div className="mx-auto mt-8 py-8 container flex items-center justify-between border-t-2">
        <div className="flex gap-x-4 items-center">
          <p>&copy; 2021 Mykniaz Inc.</p>
          <span>&middot;</span>
          <a href="#">Privacy</a>
          <span>&middot;</span>
          <a href="#">Terms</a>
          <span>&middot;</span>
          <a href="#">Sitemap</a>
        </div>
        <div className="pr-16 flex gap-4 text-xl">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <RiInstagramFill />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
