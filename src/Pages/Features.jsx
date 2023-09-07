import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import article from "../assets/images/article-details-large.jpg";
import artsmall from "../assets/images/article-details-small.jpg";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaRocket, FaCogs, FaDesktop, FaChartPie } from "react-icons/fa";
import { BsCodeSlash } from 'react-icons/bs'
import { useState } from "react";
import Layout from "../Components/Layout";
import NavbarComps from "./NavbarComps";

const Features = () => {
  const [scroll, setScroll] = useState(false)
  const [view, setView] = useState(false)


  window.onscroll = function () {
    siteScroll()
  }
  function siteScroll() {
    if (
      document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  const handleView = () => {
    setView(!view)
  }

  return (
    <Layout>
      {view && <NavbarComps closeView={() => setView(!view)} />}
      <div className="bg-black pb-20">
        <div className={`fixed w-full  ${scroll ? 'bg-blake py-4 border-b' : 'py-8'}`}>
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
            <div className="mr-10 lg:hidden text-4xl text-white"><HiOutlineBars3BottomRight onClick={() => handleView(!view)} /></div>
          </div>
        </div><br /><br /><br /><br /><br /><br />
        <div className="text-5xl pl-4 lg:pl-20 text-white font-bold">Features Details</div>
      </div>
      <div className="bg-blake">
        <div className="pb-10">
          <img src={article} alt="" className="w-[94%] m-auto py-20" />
          <div className="bg-[#35393c] lg:w-[80%] w-[92%] mx-auto px-4 lg:px-8 py-10 text-white">
            <div className="text-[1.8rem] font-semibold">Grow Your User Base With Minimum Effort</div>
            <div className="text-[1rem]">Duis at consectetur lorem donec. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non. Erat velit scelerisque in dictum non consectetur a. Imperdiet dui accumsan sit amet nulla facilisi ter mono sic</div>
          </div>
        </div>
        <div className="">
          <div className="grid text-white ">
            <div className="flex mb-14 mx-3 lg:mx-28">
              <Link to="" className=" bg-[#fc5fa1]  mr-3 w-[2.5rem] text-[1.3rem] text-center rounded-full h-[2.5rem]"><FaRocket className=" text-center mx-2.5 my-2.5" /></Link>
              <div className="grid">
                <p className="font-semibold text-[1.4rem]">Real-time Data</p>
                <p className="text-[0.9rem]">Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non que repa lasi.</p>
              </div>
            </div>
            <div className="flex mb-14 mx-3 lg:mx-28">
              <Link to="" className=" bg-[#fc5fa1]  mr-3 w-[2.5rem] text-[1.3rem] text-center rounded-full h-[2.5rem]"><FaCogs className=" lg:text-center mx-2.5 my-2.5" /></Link>
              <div className="grid">
                <p className="font-semibold text-[1.4rem]">Simple Integration</p>
                <p className="text-[0.9rem]">Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non que repa lasi.</p>
              </div>
            </div>
            <div className="flex mb-14 mx-3 lg:mx-28">
              <Link to="" className=" bg-[#fc5fa1]  mr-3 w-[2.5rem] text-[1.3rem] text-center rounded-full h-[2.5rem]"> <BsCodeSlash className=" lg:text-center mx-2.5 my-2.5" /></Link>
              <div className="grid">
                <p className="font-semibold text-[1.4rem]">Very Easy To use</p>
                <p className="text-[0.9rem]">Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non que repa lasi.</p>
              </div>
            </div>
            <div className="flex mb-14 mx-3 lg:mx-28">
              <Link to="" className=" bg-[#fc5fa1]  mr-3 w-[2.5rem] text-[1.3rem] text-center rounded-full h-[2.5rem]"><FaDesktop className=" lg:text-center mx-2.5 my-2.5" /></Link>
              <div className="grid">
                <p className="font-semibold text-[1.4rem]">High Accuracy</p>
                <p className="text-[0.9rem]">Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non que repa lasi.</p>
              </div>
            </div>
            <div className="flex mb-14 mx-3 lg:mx-28">
              <Link to="" className=" bg-[#fc5fa1] mr-3 w-[2.5rem] text-[1.3rem] text-center rounded-full h-[2.5rem]"> <FaChartPie className=" lg:text-center mx-2.5 my-2.5" /></Link>
              <div className="grid">
                <p className="font-semibold text-[1.4rem]">Reporting Tools</p>
                <p className="text-[0.9rem]">Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non que repa lasi.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[75%] w-[92%] mt-5 pb-20 text-white mx-auto">
          <div className="text-4xl pb-12 font-semibold">Use Landing Pages To Generate Leads</div>
          <img src={artsmall} alt="" className="" />
        </div>
        <div className="pb-10 lg:w-[80%] w-[95%] mx-auto text-white">
          <div className="bg-[#35393c] mb-10 lg:px-8 px-4 py-10 text-white">
            <div className="text-[1.8rem] font-semibold">Improve The Conversion Rate For The Long Term</div>
            <div className="text-[0.9rem]">Duis at consectetur lorem donec. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quis varius quam quisque id diam. Enim facilisis gravida neque convallis a. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eget magna fermentum iaculis eu non diam. Faucibus nisl tincidunt eget nullam non. Erat velit scelerisque in dictum non consectetur a. Imperdiet dui accumsan sit amet nulla facilisi ter mono sic</div>
          </div>
          <div className="">
            <div className="lg:text-[0.9rem] font-light mb-6">Velit aliquet sagittis id consectetur purus ut. Lobortis mattis aliquam faucibus purus in. A arcu cursus vitae congue mauris rhoncus aenean vel. Eu ultrices vitae auctor eu augue ut lectus. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Nibh venenatis cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio sizn derete.</div>
            <ul className="ml-4 mb-10 text-start lg:text-[0.9rem]">
              <li className="mb-3">Nibho vene cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio roni viso lere sen</li>
              <li className="mb-3">Nibho vene cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio roni viso lere sen</li>
              <li className="mb-3">Nibho vene cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio roni viso lere sen</li>
              <li className="mb-3">Nibho vene cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio roni viso lere sen</li>
              <li className="mb-3">Nibho vene cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio roni viso lere sen</li>
              <li className="mb-3">Nibho vene cras sed felis eget velit. Amet volutpat consequat mauris nunc congue mula pio roni viso lere sen</li>
            </ul>
          </div>
          <div className="bg-[#f95ea1] mt-6 w-[6.5rem] mb-12 font-light rounded-full text-center py-2.5 text-white text-sm">Sign Up</div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
