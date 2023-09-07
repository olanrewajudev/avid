import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="bg-[#000] w-full h-full">
        <div className="flex-cols lg:flex items-center justify-between pt-20 pb-16 mx-auto  ml-[7%] mr-[7%]">
          <div className=" pb-10">
            <div className="text-gray-300 text-1xl font-semibold">Lorem, ipsum.</div>
            <div className="text-gray-300 text-[0.8rem] leading-6">
              Dui vivamus arcu felis bibendum ut tristique et <br /> egestas. Dictum sit amet justo donec enim. <br /> Parturient montes nascetur ridiculus mus mauris
            </div>
          </div>
          <div className="text-gray-300 pb-10">
            <div className="text-gray-300  font-semibold">Links</div>
            <div className="text-[0.8rem] leading-8">Important: Terms & Conditions, Privacy Policy</div>
            <div className="text-[0.8rem] leading-8">Useful: Colorpicker, Icon Library, Illustrations</div>
            <div className="text-[0.8rem] leading-8">Menu: Home, Intro, Features, Details</div>
          </div>
          <div className="">
            <div className="flex items-center">
              <Link className=' bg-gray-300 p-[0.8rem] ml-4 rounded-full'> <FaFacebookF /> </Link>
              <Link className=' bg-gray-300 p-[0.8rem] ml-4 rounded-full'> <FaTwitter /> </Link>
              <Link className=' bg-gray-300 p-[0.8rem] ml-4 rounded-full'> <FaPinterestP /> </Link>
              <Link className=' bg-gray-300 p-[0.8rem] ml-4 rounded-full'> <FaInstagram /> </Link>
            </div>
            <div className="pl-6 text-gray-300 pt-6">
              <div className="text-[0.8rem]">Nam aliquam sem et tortor cons</div>
              <Link className='font-semibold text-[0.7rem]'>contact@olanrewajuwebdesigner.com</Link>
            </div>
          </div>
        </div>
        <div className=" pb-10 text-gray-300 text-center">Copyright © Olanrewaju</div>
      </div>
    </div>
  )
}

export default Footer
