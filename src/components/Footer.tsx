import { FaStarHalf, FaTwitter } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Footer = () => {
  return (
    <div className="sm:px-20 lg:px-6 xl:px-0  w-full bg-[rgb(225,225,224)]">
      <div className="flex flex-col gap-44  pt-24 lg:pt-40 pb-40 px-10 xl:px-32 text-black text-left">
        <div className="grid grid-flow-cols lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 font-bold text-2xl">
              <FaStarHalf />
              chronicle
            </div>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#464646]">
              Experience the future of storytelling.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">About</p>
            <ul className="flex flex-col gap-3 font-bold text-lg text-[#464646]">
              <li>Contact</li>
              <li>Blog</li>
              <li>Our Story</li>
              <li className="flex items-center gap-1">
                Careers{" "}
                <button className="bg-indigo-500 text-white text-sm px-4 py-1 rounded-xl">
                  Hiring
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Company</p>
            <ul className="flex flex-col gap-3 font-bold text-lg text-[#464646]">
              <li>Press</li>
              <li>Brand Assets</li>
              <li>Terms of service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 xl:w-80">
            <div className="flex items-center justify-center gap-4 lg:gap-1   border bg-white rounded-full px-4 py-2">
              <FaTwitter className="text-blue-500 text-4xl lg:text-xl" />
              <p className="text-xl lg:text-base">
                Follow us{" "}
                <span className="text-gray-500 ">on Twitter for updates</span>
              </p>
            </div>
            <div className="border bg-white flex items-center gap-4 rounded-3xl px-4 py-3">
              <div className="rounded-3xl border p-6 bg-[#101010]">
                <MdOutlinePayment className="xl:text-4xl text-sm text-white" />
              </div>
              <div className="flex flex-col text-xl font-bold">
                <p>
                  Apply for early <span className="xl:block">access</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm">
                We are still fine turing the product and would love your help.
                Join our Beta to help contribute
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Being built remote on sunny shores around the world</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
