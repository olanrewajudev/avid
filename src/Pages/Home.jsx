import logo from "../assets/images/logo.svg";
import banner from "../assets/images/header-background.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import play from '../assets/images/video.jpg'
import platform from '../assets/images/platforms.png'
import plat from '../assets/images/platform-icon-android.svg'
import form from '../assets/images/platform-icon-ios.svg'
import platforms from '../assets/images/platform-icon-windows.svg'
import part from '../assets/images/partner-logo-1.png'
import partn from '../assets/images/partner-logo-2.png'
import partne from '../assets/images/partner-logo-3.png'
import partner from '../assets/images/partner-logo-4.png'
import partnal from '../assets/images/partner-logo-5.png'
import avid from "../assets/images/video.jpg";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import detail from '../assets/images/details.jpg'
import { FaRocket, FaCogs, FaThumbsUp, FaRegDotCircle, FaChartPie, FaBinoculars } from "react-icons/fa";
import description from '../assets/images/description.jpg'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Layout from './../Components/Layout';
import NavbarComps from "./NavbarComps";

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [count, setCount] = useState(false)
  const [view, setView] = useState(false)

  window.onscroll = function () {
    siteScroll();
  };
  function siteScroll() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  const submitForm = (Event) => {
    Event.preventDefault();
  };

  const handleView = () => {
    setView(!view)
  }
  return (
    <Layout>
      {view && <NavbarComps closeView={() => setView(!view)} />}
      <div className="">
        <div className="">
          <img
            src={banner}
            alt=""
            className="absolute object-cover h-[79rem] lg:h-[79rem] -z-10"
          />
          <div
            className={`fixed w-full ${scroll ? "bg-blake py-3 border-b" : "py-8"
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="">
                <img src={logo} alt="" className="w-32 ml-10" />
              </div>
              <div className="lg:flex hidden items-center justify-center mr-10 text-white">
                <Link to="/" className="font-semibold ml-5 text-[#f95ea1] text-sm">
                  home
                </Link>
                <Link to="/feature" onClick={() => scrollTo((0, 0))} className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">
                  features
                </Link>
                <Link to="/price" onClick={() => scrollTo((0, 0))} className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">
                  pricing
                </Link>
                <Link to="/drop" onClick={() => scrollTo((0, 0))} className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">
                  drop
                </Link>
                <Link to="/contact" onClick={() => scrollTo((0, 0))} className="font-semibold hover:text-[#f95ea1] ml-5 text-sm">
                  contact
                </Link>
                <Link
                  to="/login" onClick={() => scrollTo((0, 0))} className="ml-5 border px-6 py-1.5 text-sm rounded-full">
                  Log In
                </Link>
              </div>
              <div className="mr-10 lg:hidden text-4xl text-white">
                <HiOutlineBars3BottomRight className="cursor-pointer" onClick={() => handleView(!view)} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text-center lg:p-16 p-3">
            <div className="text-[3rem] text-white font-bold">
              Avid Landing Page
            </div>
            <div className="text-white text-[1.1rem] mb-9">
              Avid is the revolutionary app which allows you to get complete
              information about your website traffic and SEO status based
              on the latest tracking technologies
            </div>
            <form className="mb-20" onSubmit={submitForm}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full lg:w-[18rem] mb-8 px-6 py-4 bg-white lg:rounded-tl-full lg:rounded-bl-full outline-none"
              />
              <button type="submit" className="bg-[#f95ea1] lg:w-[8rem]  w-full rounded-full md:rounded-full md:rounded-tr-full md:rounded-br-full  lg:rounded-none lg:rounded-tr-full lg:rounded-br-full py-4 text-white font-semibold">Get Started</button>
            </form>
          </div>
          <div className=" mx-2">
            <img src={avid} alt="" className="" />
          </div>
        </div>
        <div className="bg-blake">
          <div className="lg:m-16 m-5 mb-32">
            <div className="flex items-center justify-center">
              <div className="lg:flex grid md:grid-cols-3 sm:grid-cols-2 gap-12  lg:ml-0 lg:items-center pt-20 text-white justify-between">
                <div className="grid mb-10 font-semibold lg:text-center">
                  <Link
                    to=""
                    className=" bg-[#fac702]  mb-3 w-[7.5rem] fon text-5xl rounded-lg h-[7rem]"
                  >
                    {" "}
                    <FaRocket className=" text-center mx-9 my-8" />{" "}
                  </Link>
                  Real-time Data
                </div>
                <div className="grid mb-10 grid-cols-1 font-semibold lg:text-center">
                  <Link
                    to=""
                    className=" bg-[#886cff]  mb-3 w-[7.5rem] fon text-5xl rounded-lg h-[7rem]"
                  >
                    {" "}
                    <FaCogs className=" lg:text-center mx-9 my-8" />{" "}
                  </Link>
                  Simple Integration
                </div>
                <div className="grid mb-10 grid-cols-1 font-semibold lg:text-center">
                  <Link
                    to=""
                    className=" bg-[#ff3f00]  mb-3 w-[7.5rem] fon text-5xl rounded-lg h-[7rem]"
                  >
                    {" "}
                    <FaThumbsUp className=" lg:text-center mx-9 my-8" />{" "}
                  </Link>
                  Very Easy To Use
                </div>
                <div className="grid mb-10 grid-cols-1 font-semibold lg:text-center">
                  <Link
                    to=""
                    className=" bg-[#00d563]  mb-3 w-[7.5rem] fon text-5xl rounded-lg h-[7rem]"
                  >
                    {" "}
                    <FaRegDotCircle className=" lg:text-center mx-9 my-8" />{" "}
                  </Link>
                  High Accuracy
                </div>
                <div className="grid mb-10  grid-cols-1 font-semibold lg:text-center">
                  <Link
                    to=""
                    className=" bg-[#fc5fa1] mb-3 w-[7.5rem] fon text-5xl rounded-lg h-[7rem]"
                  >
                    {" "}
                    <FaChartPie className=" lg:text-center mx-9 my-8" />{" "}
                  </Link>
                  Reporting Tools
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center m-3 lg:mx-12 justify-between">
            <div className="text-white lg:pr-10 text-start">
              <div className=" font-semibold text-purple-400">DESCRIPTION</div>
              <div className="text-[2rem] mb-4 font-semibold">Website Analytics And Reporting Tools</div>
              <div className="lg:text-[0.9rem] text-[1.1rem]">We created Avid to help website owners better understand their traffic flow, sources and visitor behavior. Based on award winning tech you can now easily integrate user tracking features</div>
            </div>
            <br /><br /><br />
            <div className=""> <img src={description} alt="" className="lg:w-[120rem] w-[100%] rounded-lg h-[16rem] lg:h-[22rem]" /> </div>
          </div>
          <br /><br /><br /><br /><br /><br />
          <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
            <div className="bg-number object-contain lg:h-[30rem] text-center rounded-md lg:w-[93%] m-3 w-[92%] lg:p-32 py-24 px-10 mx-auto">
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 text-center">
                <div className="text-white text-6xl font-semibold"> {count && <CountUp start={0} end={231} duration={4} delay={1} />}
                  <div className="text-[0.9rem] pt-2 font-light">Happy Customers</div>
                </div>
                <div className="text-white text-6xl font-semibold"> {count && <CountUp start={0} end={385} duration={4} delay={1} />}
                  <div className="text-[0.9rem] pt-4 font-light">Issues Solved</div>
                </div>
                <div className="text-white text-6xl font-semibold"> {count && <CountUp start={0} end={159} duration={4} delay={1} />}
                  <div className="text-[0.9rem] pt-2 font-light">Good Reviews</div>
                </div>
                <div className="text-white text-6xl font-semibold"> {count && <CountUp start={0} end={128} duration={4} delay={1} />}
                  <div className="text-[0.9rem] pt-2 font-light">Case Studies</div>
                </div>
              </div>
              <br /><br />
              <div className="text-2xl font-semibold text-white">Many website owners are enjoying the benefits of real-time accurate traffic information so what are you waiting for?</div> <br /><br />
              <button
                type="submit"
                className="bg-[#f95ea1] w-[10rem] hover:text-[#f95ea1] hover:bg-transparent hover:border border-[#f95ea1]  rounded-full l py-3 text-white text-sm"> Get Started</button>
            </div>
          </ScrollTrigger>
          <br /><br /><br /><br /><br />
          <div className="lg:flex items-center gap-16 justify-between">
            <img src={detail} alt="" className="w-[35rem] mx-auto rounded-md lg:ml-9" />
            <div className="text-white mx-2 my-12 lg:mr-9">
              <div className="flex items-center gap-4">
                <div className="hover:text-purple-400 hover:border-b lg:text-[1.1rem] font-bold border-purple-400 w-fit">INTEGRATE</div>
                <div className="hover:text-purple-400 hover:border-b lg:text-[1.1rem] font-bold border-purple-400 w-fit">MONITOR</div>
                <div className="hover:text-purple-400 hover:border-b lg:text-[1.1rem] font-bold border-purple-400 w-fit">ANALYSE</div>
              </div>
              <div className="lg:text-[1.1rem] mt-3"> <span className="font-semibold">Setup is quite simple</span> and if you closely follow the procedure you should have a full tracking system on your website in a couple of minutes</div>
              <ol className="">
                <li className=" lg:text-[1.1rem] mt-3 pb-3"> <b className="font-semibold">Easy setup</b> with minium web server knowledge</li>
                <li className=" lg:text-[1.1rem] pb-3"> <b className="font-semibold">Easy setup</b> with minium web server knowledge</li>
                <li className=" lg:text-[1.1rem] pb-3"> <b className="font-semibold">Easy setup</b> with minium web server knowledge</li>
              </ol>
              <div className="bg-[#f95ea1] mt-6 w-[7rem] rounded-full text-center py-2 text-white text-sm">Modal</div>
            </div>
          </div>
          <br /><br /><br /><br />
          /
          <div className="">
            <div className="text-center">
              <div className=" font-bold text-sm text-purple-400">INTEGRATE</div>
              <div className="text-white text-4xl tracking-wide font-semibold">Improve Website Traffic And SEO Performance</div>
            </div><br /><br /><br />
            <div className="">
              <div className="grid lg:grid-cols-2 gap- text-white ">
                <div className="flex mb-14 mx-5 lg:mx-12">
                  <Link to="" className=" bg-[#fac702]  mr-3 w-[3.5rem] text-4xl rounded-sm h-[3.5rem]"><FaRocket className=" text-center mx-2.5 my-2.5" /></Link>
                  <div className="grid">
                    <p className="font-semibold text-2xl">Real-time Data</p>
                    <p className="text-[1rem]">Avid technology is able to provide real-time data about your website traffic, acquisitions source and more</p>
                  </div>
                </div>
                <div className="flex mb-14 mx-5 lg:mx-12">
                  <Link to="" className=" bg-[#886cff]  mr-3 w-[3.5rem] text-4xl rounded-sm h-[3.5rem]"><FaCogs className=" lg:text-center mx-2.5 my-2.5" /></Link>
                  <div className="grid">
                    <p className="font-semibold text-2xl">Simple Integration</p>
                    <p className="text-[1rem]">The admin interface has a smooth learning curve and can easily be operated by anyone with basic web skills</p>
                  </div>
                </div>
                <div className="flex mb-14 mx-5 lg:mx-12">
                  <Link to="" className=" bg-[#ff3f00]  mr-3 w-[3.5rem] text-4xl rounded-sm h-[3.5rem]"> <FaThumbsUp className=" lg:text-center mx-2.5 my-2.5" /></Link>
                  <div className="grid">
                    <p className="font-semibold text-2xl">Very Easy To use</p>
                    <p className="text-[1rem]">The scripts are easy to integrate in any type of website wether it is a static HTML page or a dynamic page</p>
                  </div>
                </div>
                <div className="flex mb-14 mx-5 lg:mx-12">
                  <Link to="" className=" bg-[#00d563]  mr-3 w-[3.5rem] text-4xl rounded-sm h-[3.5rem]"><FaRegDotCircle className=" lg:text-center mx-2.5 my-2.5" /></Link>
                  <div className="grid">
                    <p className="font-semibold text-2xl">High Accuracy</p>
                    <p className="text-[1rem]">Our development team has done it is best to create a powerful tool that provides reliable and accurate data</p>
                  </div>
                </div>
                <div className="flex mb-14 mx-5 lg:mx-12">
                  <Link to="" className=" bg-[#fc5fa1] mr-3 w-[3.5rem] text-4xl rounded-sm h-[3.5rem]"> <FaChartPie className=" lg:text-center mx-2.5 my-2.5" /></Link>
                  <div className="grid">
                    <p className="font-semibold text-2xl">Reporting Tools</p>
                    <p className="text-[1rem">The included reporting features are completely customizable and enable a general overview of data</p>
                  </div>
                </div>
                <div className="flex mb-14 mx-5 lg:mx-12">
                  <Link to="" className=" bg-[#fac702] mr-3 w-[3.5rem] text-4xl rounded-sm h-[3.5rem]"> <FaBinoculars className=" lg:text-center mx-2.5 my-2.5" /></Link>
                  <div className="grid">
                    <p className="font-semibold text-2xl">Source Monitoring</p>
                    <p className="text-[1rem]">See where traffic is coming from and what keywords are used to get on specific webpages from your website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <img src={banner} alt="" className="absolute w-full h-[55rem] -z-10" />
          <div className="text-center text-white pt-32 pb-10 text-4xl font-semibold">Avid App Video Tour</div>
          <img src={play} alt="" className="w-[95%] mx-auto rounded-md" />
          <div className="text-white text-center pt-14 text-[0.9rem]"><span className="font-bold">Check out this video overview</span> of our analytics suite and get a glimpse of what this powerful traffic <br /> monitoring app can do for you. Then don not hesitate go ahead and  <Link to='/' className=" underline">sign up to get started</Link> </div>
        </div>
        <div className="bg-blake pb-32">
          <div className="text-center pt-12 pb-5 text-xl text-white">Proudly Featured In</div>
          <div className="flex items-center justify-center gap-10">
            <div className="lg:flex grid md:grid-cols-3 items-center mb-24 justify-center gap-10">
              <img src={part} alt="" className="w-36 mb-10" />
              <img src={partn} alt="" className="w-36 mb-10" />
              <img src={partne} alt="" className="w-36 mb-10" />
              <img src={partner} alt="" className="w-36 mb-10" />
              <img src={partnal} alt="" className="w-36 mb-10" />
            </div>
          </div>
          <img src={platform} alt="" className="w-[90%] mx-auto" />
          <div className="">
            <div className="flex items-center pt-12 gap-10 justify-center">
              <img src={plat} alt="" className="w-8" />
              <img src={form} alt="" className="w-8" />
              <img src={platforms} alt="" className="w-8" />
            </div><div className="text-white text-center pt-5 pb-28 text-[0.9rem]"><span className="font-bold">Use the app on all platforms</span> and start monitoring your website traffic right away. There are no platform <br /> specific limitations so you can enjoy all the extended features wherever your are, on any device</div>
          </div>
          <div className="">
            <div className="bg-number object-contain lg:h-[30rem] text-center rounded-md lg:w-[93%] m-4 w-[92%] lg:p-32 py-24 px-10 mx-auto">
              <div className="text-white text-3xl mb-9 font-semibold">Start monitoring your website traffic with Avid and enjoy the information it provides about your users experience</div>
              <form className="mb-0" onSubmit={submitForm}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full lg:w-[18rem] mb-8 px-6 py-4 bg-white lg:rounded-tl-full lg:rounded-bl-full outline-none"
                />
                <button type="submit" className="bg-[#f95ea1] lg:w-[8rem]  w-full rounded-full md:rounded-full md:rounded-tr-full md:rounded-br-full  lg:rounded-none lg:rounded-tr-full lg:rounded-br-full py-4 text-white font-semibold">Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
