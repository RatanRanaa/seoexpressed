import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 1,
      quote: "I've used SEO Expressed and I am really satisfied with the products and services they offer. They are the best in the market.",
      name: 'Ashutosh Saini',
      location: 'India',
    },
    {
      id: 2,
      quote: 'SEO Expressed has helped us grow our online presence and reach new customers. Their team is highly skilled and dedicated to delivering results.',
      name: 'Samantha Johnson',
      location: 'USA',
    },
    {
      id: 3,
      quote: 'I highly recommend SEO Expressed to anyone looking to improve their website rankings and increase traffic. They provide top-notch services and support.',
      name: 'Michael Lee',
      location: 'Canada',
    },
  ];

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => {
        return activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const history = useNavigate()

  return (
    <>
      <header id="header" className="relative">
        <div className="">
          <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="">
                <h1 className="text-4xl sm:text-5xl md:text-6xl mt-20 font-extrabold leading-tight">
                  SEO Made Easy - <span className=" text-[#692aa9]">SEO</span>
                </h1>
                <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#692aa9]">
                  Expressed{' '}
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  has all the
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  Tools You Need
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-medium leading-6 tracking-widest text-gray-900 pt-6">
                  Looking to boost your website's search
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-medium leading-6 tracking-widest text-gray-900">
                  engine optimization? Look no further than
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-medium leading-6 tracking-widest text-gray-900">
                  SEO EXPRESSED!
                </h1>
                <button className="font-medium border mt-5 py-3 md:mb-40 px-6 bg-[#8d57f7] text-white text-lg rounded-3xl">
                  <a href="mailto:your_email_address@gmail.com" target="_main">
                    Contact Now
                  </a>
                </button>
              </div>
              <div className=" md:w-1/3 ">
                <img className="" src="./images/_Downloader.webp" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </header>
          <div className=" ">
            <img id='header-img'
              className=" mt-[100px] md:mt-[440px] w-full h-screen absolute inset-0"
              src="./images/WhatsApp.jpeg"
              alt="logo"
            />
          </div>

      <div className="h-[400px] bg-[#9e3ffd] relative">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl text-white mt-8 sm:mt-16 md:mt-20 lg:mt-2">
            - Launch Sale -
          </h1>
          <h1 className="text-6xl text-white py-6 font-bold sm:text-7xl md:text-8xl">
            Get 30% Off
          </h1>
          <button
            onClick={() => history('/plans')}
            className="border px-8 py-2 bg-white text-[#9e3ffd] text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="my-10 text-[#9e3ffd] font-bold text-center">
          AS FEATURED ON
        </h1>
        <ul className="flex flex-wrap justify-center items-center">
          <li className="px-10 py-5">
            <img
              src="./images/Canva-Logo.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
          <li className="px-10 py-5">
            <img
              src="./images/removebg.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
          <li className="px-10 py-5">
            <img src="./images/666.webp" alt="logo" className="w-32 h-auto" />
          </li>
          <li className="px-10 py-5">
            <img
              src="./images/semrush.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
          <li className="px-10 py-5">
            <img
              src="./images/ahrefs.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
        </ul>
      </div>

<div className=''>
  <div className=" flex items-center justify-center flex-col text-center sm:text-left">
    <h1 className="mt-10 mb-5 text-[#9e3ffd] font-bold">
      We Build Trust
    </h1>
    <h1 className="text-4xl font-bold">
      Industry Experts
    </h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center mb-10">
    <div>
      <img src="./images/dl.webp" alt="logo" className="mx-auto" />
      <h1 className="font-bold mt-5 mb-2">
        Customer Support 24/7
      </h1>
      <p>
        SEO Expressed is always available to help and provide expert
        advice on search engine optimization. With round-the-clock
        availability, their team of professionals is dedicated to helping
        businesses maximize their online presence and drive traffic to
        their websites.
      </p>
    </div>
    <div>
      <img
        src="https://static.wixstatic.com/media/d4d6f6_15b0a68205a543a6a32c8f3607f18e9b~mv2.png/v1/fill/w_215,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dl_beatsnoop_com-a65qoEnc1h__1_-removebg-preview.png"
        alt="logo"
        className="mx-auto"
      />
      <h1 className="font-bold mt-5 mb-2">
        Customer Support 24/7
      </h1>
      <p>
        SEO Expressed is always available to help and provide expert
        advice on search engine optimization. With round-the-clock
        availability, their team of professionals is dedicated to helping
        businesses maximize their online presence and drive traffic to
        their websites.
      </p>
    </div>
    <div>
      <img src="./images/dl.webp" alt="logo" className="mx-auto" />
      <h1 className="font-bold mt-5 mb-2">
        Customer Support 24/7
      </h1>
      <p>
        We are transparent and reliable in providing search engine
        optimization services and products. With a commitment to 100%
        trustworthiness, we prioritize customer satisfaction and ensure
        that all of our clients receive the highest quality of service.
        Our team of experienced professionals works tirelessly to deliver
        measurable results, helping businesses achieve their online
        marketing goals. Customers can trust us that we will receive
        honest and reliable service every time.
      </p>
    </div>
  </div>
</div>


      <div className=" bg-[#16163f]">
        <div className="mx-auto px-6 py-12 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h1 className="text-4xl font-bold text-white mt-16 mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
              We’re Good with Numbers
            </h1>
            <ul className="flex flex-wrap justify-center -mx-4">
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-5xl py-4 font-bold text-white ml-8 mb-2 sm:text-5xl md:text-4xl flex items-center justify-center text-center">
                  2
                </h1>
                <h1 className="text-2xl font-light text-white flex items-center justify-center">
                  Years of Trust
                </h1>
              </li>
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-5xl py-4 font-bold text-white ml-4 mb-2 sm:text-5xl md:text-4xl flex items-center justify-center text-center">
                  679
                </h1>
                <h1 className="text-2xl font-light text-white flex items-center justify-center">
                  Satisfied Customers
                </h1>
              </li>
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-5xl py-4 font-bold text-white ml-1 mb-2 sm:text-5xl md:text-4xl flex items-center justify-center text-center">
                  13
                </h1>
                <h1 className="text-2xl font-light text-white flex items-center justify-center">
                  Team Members
                </h1>
              </li>
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-5xl py-4 font-bold text-white ml-1 mb-2 sm:text-5xl md:text-4xl flex items-center justify-center text-center">
                  34
                </h1>
                <h1 className="text-2xl font-light text-white flex items-center justify-center">
                  Web Partners
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between h-full overflow-hidden">
          <div className="w-full md:w-full h-full bg-white px-6 md:px-16 py-8 md:py-20 flex flex-col justify-center">
            <h1 className="text-purple-600 font-bold my-5 tracking-widest text-center md:text-left">
              ABOUT
            </h1>
            <h1 className="text-4xl font-semibold text-center md:text-left">
              Powering your online success.
            </h1>
            <div className="mt-8 md:mt-12">
              <h1 className="font-normal text-center md:text-left">
                At SEO Expressed, we understand that SEO can be expensive, which
                is why we have created a solution that enables our clients to
                access the same high-quality tools and resources at a fraction
                of the cost.
              </h1>
              <h1 className="mt-5 font-normal text-center md:text-left">
                Our collaborative buying model allows us to pool resources and
                negotiate deals with top SEO tool providers, which we then pass
                on to our clients. We are passionate about helping our clients
                succeed online, and we believe that access to the right tools
                and resources is essential for achieving that success.
              </h1>
              <h1 className="mt-5 font-normal text-center md:text-left">
                Our team of experienced professionals is dedicated to providing
                exceptional customer service and support, ensuring that our
                clients have everything they need to improve their website's SEO
                performance and drive more traffic to their site.
              </h1>
              <h1 className="mt-5 font-normal text-center md:text-left">
                Whether you are an individual looking to improve your personal
                website's SEO or a small business wanting to increase your
                online visibility, SEO Expressed can help. With our affordable
                SEO tools and resources, you can achieve your digital marketing
                goals and take your online presence to the next level.
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <img
              id="about-img"
              className=" h-screen object-cover"
              src="./images/About.jpeg"
              alt="about-img"
            />
          </div>
        </div>
    <div className="relative h-[500px]">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full bg-purple-600 flex flex-col justify-center px-8 items-center">
            <p className="text-white text-2xl mb-4 w-full md:w-1/2 mx-auto text-center md:text-center sm:text-left sm:mb-2 md:mb-4">{item.quote}</p>
            <h1 className="text-white text-3xl mb-2">{item.name}</h1>
            <p className="text-white text-xl mb-4">{item.location}</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25" />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 z-10 p-2 text-white bg-gray-900 rounded-r-lg"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 z-10 p-2 text-white bg-gray-900 rounded-l-lg"
      >
        &gt;
      </button>
    </div>
      </div>


      

      <div className="flex items-center justify-center flex-col mb-10">
        <h1 className="text-[#9e3ffd] my-6 text-center md:text-left">FAQs</h1>
        <h1 className="text-4xl text-center md:text-left">
          Any Questions? We got you
        </h1>
        <div id="faqs" className="flex flex-col md:flex-row md:h-full">
          <div id="faq" className="w-full md:w-1/2">
            <div className="flex items-center justify-center flex-col">
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  What Would Be The Access Mode?
                </h1>
                <p className="w-full flex items-center justify-center mx-auto text-center px-10  mt-4 md:text-left">
                  We are currently offering Access through an extension, you
                  will have to download our extension and install it in chrome.
                  An access guide has been provided in Member Dashboard
                </p>
              </div>
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Can I Use My Tool On Office As Well?
                </h1>
                <p className="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  We are currently offering Access through an extension, you
                  will have to download our extension and install it in chrome.
                  An access guide has been provided in Member Dashboard
                </p>
              </div>
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  How Would I Get Access?
                </h1>
                <p className="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  We are proud to say that our live chat support replies Quickly
                  & Available the Whole day to assist our Users. We also Offer
                  Anydesk support to Our Users.
                </p>
              </div>
            </div>
          </div>
          <div id="faq-1" className="w-full md:w-1/2">
            <div className="flex items-center justify-center flex-col">
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Do Your Offer Refunds?
                </h1>
                <p className="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  Not at All, We only & Only Refund if our tools don’t work or
                  more than 24 Hours. Make sure to clear anything from the Live
                  Chat Support Before Buying Anything. Read our Refund Policy
                  For More Info.
                </p>
              </div>
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Can I Share My Account?
                </h1>
                <p className="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  No, We don’t allow account sharing. Single Account for single
                  user. If you shared your account with someone, Our system will
                  autoblock your Account.
                </p>
              </div>
              <div className="w-full md:w-3/4">
                <h1 className="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Can I Expect A Good Support?
                </h1>
                <p className="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  No, We don’t allow account sharing. Single Account for single
                  user. If you shared your account with someone, Our system will
                  autoblock your Account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10" id="seller">
        <h1 className="text-4xl font-extrabold text-gray-700 tracking-normal text-center mb-10">
          Best Sellers
        </h1>
        <div className="max-w-7xl mx-auto bg-white px-10 md:mx-50 py-16 flex flex-wrap justify-center">
          <div
            id="sellers-1"
            className="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_f43e7757c6184093b309914a58b66270~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_f43e7757c6184093b309914a58b66270~mv2.png"
              alt="logo"
              className="w-full h-auto md:h-60 object-contain"
            />
            <h1 className="my-4 font-extrabold text-gray-700 tracking-widest text-center text-2xl">
              SILVER PLAN
            </h1>
            <div className="flex justify-center items-center mb-4">
              <pre className="text-2xl md:text-4xl">$</pre>
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-700 md:ml-2">
                10
              </h1>
            </div>
            <h1 className="text-center text-2xl">Every Month</h1>
            <h1 className="py-5 text-center text-gray-600 text-sm md:text-base">
              All Basic SEO tools
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              one day free trial
            </h1>
            <button className="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 className="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              UberSuggest
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Grammerly
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Sem Rush
            </h1>
          </div>
          <div
            id="sellers-2"
            className="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_9ccb4242e5564583b3d04328623d5788~mv2.png/v1/fill/w_296,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_9ccb4242e5564583b3d04328623d5788~mv2.png"
              alt="logo"
              className="w-full h-auto md:h-60 object-contain"
            />
            <h1 className="my-4 font-extrabold text-gray-700 tracking-widest text-center text-2xl">
              GOLD PLAN
            </h1>
            <div className="flex justify-center items-center mb-4">
              <pre className="text-2xl md:text-4xl">$</pre>
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-700 md:ml-2">
                15
              </h1>
            </div>
            <h1 className="text-center text-2xl">Every Month</h1>
            <h1 className="pt-5 text-center text-gray-600 text-sm md:text-base">
              Everything in Silver Plan
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              {' '}
              + More
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              one day free trail{' '}
            </h1>
            <button className="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 className="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              Everything in silver plan
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Majestic
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Moz Pro
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Buzzsumo
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Spyfu
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Woorank
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Spamzilla
            </h1>
          </div>
          <div
            id="sellers-2"
            className="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png/v1/fill/w_289,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png"
              alt="logo"
              className="w-full h-auto md:h-60 object-contain"
            />
            <h1 className="my-4 font-extrabold text-gray-700 tracking-widest text-center text-2xl">
              DIAMOND PLAN
            </h1>
            <div className="flex justify-center items-center mb-4">
              <pre className="text-2xl md:text-4xl">$</pre>
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-700 md:ml-2">
                29
              </h1>
            </div>
            <h1 className="text-center text-2xl">Every Month</h1>
            <h1 className="pt-5 text-center text-gray-600 text-sm md:text-base">
              Everything in Gold Plan
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              {' '}
              + More
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              one day free trail{' '}
            </h1>
            <button className="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 className="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              Everything in silver plan
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Storyblocks
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Helium 10
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Jungle Scout
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Canva Pro
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Pickmonkey
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Crello
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Indexification
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Instatext
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Quilbot
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Envato Elements
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Kwfinder
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Rytr.ai
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Spotify
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Ahref
            </h1>
          </div>
          <div
            id="sellers-2"
            className="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
              className="w-full h-auto md:h-60 object-contain"
            />
            <h1 className="my-4 font-extrabold text-gray-700 tracking-widest text-center text-2xl">
              PLATINUM PLAN
            </h1>
            <div className="flex justify-center items-center mb-4">
              <pre className="text-2xl md:text-4xl">$</pre>
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-700 md:ml-2">
                49
              </h1>
            </div>
            <h1 className="text-center text-2xl">Every Month</h1>
            <h1 className="pt-5 text-center text-gray-600 text-sm md:text-base">
              Everything in Gold Plan
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              {' '}
              + More
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 className="text-center text-gray-600 text-sm md:text-base">
              one day free trail{' '}
            </h1>
            <button className="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 className="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              Everything in silver plan
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Storyblocks
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Helium 10
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Jungle Scout
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Canva Pro
            </h1>
            <h1 className="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Pickmonkey
            </h1>
          </div>
        </div>
      </div>

      <div id="individual" className="bg-[#f9f3ff] container" >
        <h1 className="flex items-center justify-center py-20 text-4xl font-bold">
          Individual Plan
        </h1>
        <div className="bg-white py-20 md:p-20 max-w-7xl flex justify-center flex-wrap m-auto">
        
            <div className="border h-[640px] w-60 flex flex-col items-center overflow-hidden px-5 mx-5">
              <img
                src="https://static.wixstatic.com/media/d4d6f6_9ab7c271931f470794f99d26e00d5d84~mv2.webp"
                alt="logo"
              />
              <h1 className="my-4 font-extrabold tracking-widest text-2xl ">
                Veed.io
              </h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-8xl font-bold ">10</h1>
              </div>
              <h1 className=" text-2xl">Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">Veed.io</h1>
            </div>
        
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden px-5 mx-5">
              <img
                className=" mt-1"
                src="https://static.wixstatic.com/media/d4d6f6_418267f6aa9c499192ab25919d3af73c~mv2.jpeg/v1/fill/w_296,h_200,fp_0.23_0.50,lg_1,q_80,enc_auto/d4d6f6_418267f6aa9c499192ab25919d3af73c~mv2.jpeg"
                alt="logo"
              />
              <h1 className="my-4 font-extrabold tracking-widest text-2xl ">
                Semrush Trend
              </h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-8xl font-bold ">15</h1>
              </div>
              <h1 className=" text-2xl">Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">
                Semrush Trend
              </h1>
            </div>
        
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden px-5 mx-5">
              <img
                className=" mt-1"
                src="https://static.wixstatic.com/media/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png/v1/fill/w_289,h_200,fp_0.23_0.50,lg_1,q_85,enc_auto/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png"
                alt="logo"
              />
              <h1 className="my-4 font-extrabold tracking-widest text-2xl ">
                Vistacreate
              </h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-8xl font-bold ">10</h1>
              </div>
              <h1 className=" text-2xl">Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">Vistacreate</h1>
            </div>
        
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden px-5 mx-5">
              <img
                className=" mt-1"
                src="https://static.wixstatic.com/media/d4d6f6_a0591139935f48458ae13333baf6a399~mv2.jpg/v1/fill/w_280,h_200,fp_0.23_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d4d6f6_a0591139935f48458ae13333baf6a399~mv2.jpg"
                alt="logo"
              />
              <h1 className="my-4 font-extrabold tracking-widest text-2xl ">
                SpyFu
              </h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-8xl font-bold">5</h1>
              </div>
              <h1 className=" text-2xl">Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">SpyFu</h1>
            </div>
        </div>
      </div>
      

      <div
        id="contact"
        className="flex flex-col lg:flex-row items-center justify-between"
      >
        <div id="contact-1" className=" lg:w-1/2 lg:h-auto pb-20 lg:pl-36">
          <h1 className="text-[#9e3ffd] text-center text-2xl my-20 font-bold underline lg:text-left tracking-widest">
            Contact
          </h1>
          <h1 className="text-3xl py-4 font-bold text-center lg:text-left">
            Drop your queries
          </h1>
          <div className="flex flex-col lg:flex-row py-1 text-center lg:text-left">
            <h1 className="font-bold">140E Hartsdale Avenue New York </h1>
            <h1 className="font-bold ml-0 lg:ml-4">United States</h1>
          </div>
          <h1 className="font-bold py-1 text-center lg:text-left">
            seoexpressed@gmail.com
          </h1>
          <div className="flex justify-center lg:justify-start">
            <a href="https://www.instagram.com/your_instagram_username/"><i className="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/your_linkedin_username/"><i className="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/your_facebook_username/"><i className="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/your_twitter_username/"><i className="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div id="contact-2" className=" lg:w-1/2 lg:h-auto py-10">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block mb-1 font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block mb-1 font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700"
            >
              Contact Now
            </button>
          </form>
        </div>
      </div>

      <div className=" border-t-4">
        <p className=" flex items-center justify-center my-5">
          © 2023 by SEO Expressed. Powered and secured by SEO Expressed Team.
        </p>
      </div>
    </>
  )
}

export default Home
