import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">About Us</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <p>
              Our college is committed to providing quality education, fostering innovation, and nurturing future leaders.  
            </p>
            <a href="/about" className="text-blue-500">Learn More</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Quick Links</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a href="/admissions">Admissions</a>
            <a href="/courses">Courses</a>
            <a href="/faculty">Faculty</a>
            <a href="/events">Events</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Resources</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a href="/library">Library</a>
            <a href="/alumni">Alumni</a>
            <a href="/placements">Placements</a>
            <a href="/scholarships">Scholarships</a>
            <a href="/student-portal">Student Portal</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-medium">Follow Us</h2>
          <div className="flex space-x-4 text-xl ">
            <a href="https://www.facebook.com/profile.php?id=100090763780520" aria-label="Facebook">
              <FaFacebookF color='blue'/>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            {/* <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a> */}
            <a href="https://www.instagram.com/sbcity_college?igsh=MXJqOTlpOXg4cHRuOA==" aria-label="Instagram">
              <FaInstagram color='red'/>
            </a>
            {/* <a href="https://github.com" aria-label="GitHub">
              <FaGithub />
            </a> */}
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col items-center justify-center px-6 pt-12 space-y-4">
        <div className="flex space-x-4 text-sm dark:text-gray-600">
          <span className="flex items-center">
            <AiOutlineHome className="mr-2" /> Umred Road,Sakkardhara,Nagpur.
          </span>
          <span className="flex items-center">
            <BsFillTelephoneFill className="mr-2" /> 0712-2745099
          </span>
          <span className="flex items-center">
            <IoMdMail className="mr-2" /> info@binzanicitycollege.in
          </span>
        </div>
        <span className="text-sm dark:text-gray-600">
          © {new Date().getFullYear()} Binzani City College. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
