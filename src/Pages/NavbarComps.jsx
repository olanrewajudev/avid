import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const NavbarComps = ({closeView}) => {

    return (
        <div className="bg-black w-screen fixed overflow-y-hidden z-10 h-[100%]">
            <div className="pt-8 mb-8">
                <div className="flex items-center justify-between">
                    <div className="">
                        <img src={logo} alt="" className="w-32 ml-10" />
                    </div>

                    <div className="mr-10 text-4xl text-white">
                        <HiOutlineBars3BottomRight className="cursor-pointer" onClick={closeView} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 text-white">
                <Link to="/" className="font-semibold ml-5 text-[#f95ea1] text-xl">
                    home
                </Link>
                <Link to="/feature" className="font-semibold hover:text-[#f95ea1] ml-5 text-xl">
                    features
                </Link>
                <Link to="/price" className="font-semibold hover:text-[#f95ea1] ml-5 text-xl">
                    pricing
                </Link>
                <Link to="/drop" className="font-semibold hover:text-[#f95ea1] ml-5 text-xl">
                    drop
                </Link>
                <Link to="/contact" className="font-semibold hover:text-[#f95ea1] ml-5 text-xl">
                    contact
                </Link>
                <Link
                    to="/login" className="ml-5 border px-4 py-1.5 text-xl w-24 rounded-full">
                    Log In
                </Link>
            </div>
        </div>
    )
}

export default NavbarComps
