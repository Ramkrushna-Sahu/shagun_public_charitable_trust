import React from "react";
import { FaArrowRight } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black w-full ">
      <div className="flex flex-col md:flex-row xl:flex-row text-gray-300 justify-between py-14 px-8 md:px-16 xl:px-16 font-roboto text-sm xl:text-base">
        <div className="pt-10 md:pt-0 xl:pt-0">
          <p className="font-bold">Contact Us</p>
          <div className="mt-5  flex flex-col gap-2 text-gray-400">
            <a
              href="https://wa.me/8879685345"
              className="hover:text-orange-500"
            >
              8879685345
            </a>
            <a
              href="mailto:ngoshagun@gmail.com"
              className="hover:text-orange-500"
            >
              ngoshagun@gmail.com
            </a>
            <a
              href="mailto:ganga.sagar@gmail.com"
              className="hover:text-orange-500"
            >
              ganga.sagar@gmail.com
            </a>
          </div>
        </div>
        <div className="pt-10 md:pl-3 md:pt-0 xl:pt-0">
          <p>About</p>
          <div className="mt-5  flex flex-col gap-2 text-gray-400">
            <a href="#" className="hover:text-orange-500">
              Charity
            </a>
            <a href="/trusteeMember" className="hover:text-orange-500">
              Our Team
            </a>
            <a href="/futureprojects" className="hover:text-orange-500">
              Future Projects
            </a>
            <a href="#" className="hover:text-orange-500">
              Acommplished Projects
            </a>
          </div>
        </div>
        <div className="pt-10 md:pl-3 md:pt-0 xl:pt-0">
          <p>Quick Link</p>
          <div className="mt-5 flex flex-col gap-2 text-gray-400">
            <a href="./donation" className="hover:text-orange-500">
              Donate Now
            </a>
            <a href="/trusteeRegister" className="hover:text-orange-500">
              Become a volunteer
            </a>
            <a href="#" className="hover:text-orange-500">
              Contact Us
            </a>
          </div>
        </div>
        <div className="pt-10 md:pl-3 md:pt-0 xl:pt-0">
          <p>Newsletter</p>
          <div className="mt-5 flex flex-col gap-2 text-gray-400">
            <p className="w-56">
              Subscribe us and get latest news & upcoming events.
            </p>
            <input
              placeholder="Email Address"
              className="bg-transparent px-4 py-2 mt-4 border rounded-lg"
            />
            <div
              className="mt-2 flex gap-3 text-base text-orange-400 group cursor-pointer w-[82%]
            items-center hover:bg-gradient-to-bl from-orange-500  to-orange-700 px-4 py-1 rounded-full transition ease-in-out duration-700"
            >
              <FaArrowRight className=" group-hover:translate-x-32 transition ease-in-out duration-700 group-hover:text-white" />
              <p className="uppercase text-sm md:text-base xl:text-base font-roboto group-hover:-translate-x-5 transition ease-in-out duration-700 group-hover:text-white">
                Subcribe Us !
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
