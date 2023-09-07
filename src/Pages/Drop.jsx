import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Layout from "../Components/Layout";

const Drop = () => {
  return (
    <Layout>
      <div className="bg-black pb-20">
        <div className={`fixed w-full ${scroll ? 'bg-blake py-4 border-b' : 'py-8'}`}>
          <div className="flex items-center justify-between">
            <div className=""><img src={logo} alt="" className="w-32 ml-10" /></div>
            <div className="lg:flex hidden items-center justify-center mr-10 text-white">
              <Link to="/" className="font-semibold ml-5 hover:text-[#f95ea1] text-sm">home</Link>
              <Link to="/feature" className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">features</Link>
              <Link to="/price" className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">pricing</Link>
              <Link to="/drop" className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">drop</Link>
              <Link to="/contact" className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">contact</Link>
              <Link to="/login" className="ml-5 border px-6 py-1.5 text-sm rounded-full">Log In</Link>
            </div>
            <div className="mr-10 lg:hidden text-4xl text-white"><HiOutlineBars3BottomRight /></div>
          </div>
        </div><br /><br /><br /><br /><br /><br />
        <div className="text-5xl pl-4 lg:pl-20 text-white font-bold">Pricing Options</div>
      </div>
    </Layout>
  )
}

export default Drop
