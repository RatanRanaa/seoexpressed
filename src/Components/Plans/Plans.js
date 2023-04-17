import React from 'react'

const Plans = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-col lg:items-center">
        <h1 className="text-gray-700 text-4xl md:text-6xl lg:text-8xl font-extrabold flex items-center justify-center mt-16 lg:mt-48">
          Choose your pricing
        </h1>
        <h1 className="text-gray-700 text-4xl md:text-6xl lg:text-8xl font-extrabold flex items-center justify-center ">
          plan
        </h1>
        <p className="text-gray-700 font-normal text-lg md:text-4xl flex items-center justify-center py-5 lg:py-10">
          Find one that works for you
        </p>
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="border mx-auto h-full md:w-80 flex flex-col items-center overflow-hidden mb-4 md:mb-0 ">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Silver Plan</h1>
            <div className="flex items-center">
              <pre className="text-xl">$</pre>
              <h1 className="text-6xl font-bold">10</h1>
            </div>
            <h1 className=' text-2xl font-medium'>Every Month</h1>
            <h1 className="py-5 font-medium">All Basic SEO Tools</h1>
            <h1 className="font-light">1-day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="border-t-2 pt-6 font-bold flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              UberSuggest
            </h1>
            <h1 className="pt-4 font-bold flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Grammarly
            </h1>
            <h1 className="pt-4 font-bold flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              SEMRush
            </h1>
          </div>
          <div className="border mx-auto h-full md:w-80 flex flex-col items-center overflow-hidden mb-4 md:mb-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Gold Plan</h1>
            <div className="flex items-center">
              <pre className="text-xl">$</pre>
              <h1 className="text-6xl font-bold">15</h1>
            </div>
            <h1 className=' text-2xl font-medium'>Every Month</h1>
            <h1 className="pt-5 font-medium">Everything in Silver Plan</h1>
            <h1 className="font-light mb-6">+ More</h1>
            <h1 className="font-light">1-day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="border-t-2 px-12 pt-6 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Everything in Silver Plan
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Majestic
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Moz Pro
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Buzzsumo
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Spyfu
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Woorank
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Sparnzilla
            </h1>
          </div>
          <div className="border mx-auto h-full md:w-80 flex flex-col items-center overflow-hidden mb-4 md:mb-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Platinum Plan
            </h1>
            <div className="flex items-center">
              <pre className="text-xl">$</pre>
              <h1 className="text-6xl font-bold">29</h1>
            </div>
            <h1 className=' text-2xl font-medium'>Every Month</h1>
            <h1 className="pt-5 font-medium">Everything in Silver Plan</h1>
            <h1 className="font-light mb-6">+ More</h1>
            <h1 className="font-light">1-day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="border-t-2 px-6 pt-6 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Everything in Diamond Plan
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Semrush Business
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Semrush Trend
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              keywordtool.io
            </h1>
            <h1 className="pt-4 font-light flex items-center">
              <i className="text-[#9e3ffd] fas fa-check-circle px-3"></i>
              Netflix
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid gap-x-8 grid-cols-1 md:grid-cols-3">
          <div className="border w-full md:w-80 mx-auto flex flex-col items-center overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Diamond plan
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">19</h1>
            </div>
            <h1 className=" font-bold pt-2 md:pt-5">Every Month</h1>
            <h1 className="pt-2 md:pt-5 font-light">
              Everything in Gold Plan + More
            </h1>
            <h1 className="pt-2 md:pt-6 font-light">1 day free trial</h1>
            <button className="border px-8 md:px-12 mt-4 md:mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 px-8 md:px-12 pt-6 font-light">
              Everything in Silver plan
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Storyblocks
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Helium 10
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Jungle Scout
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Canva Pro
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Pickmonkey
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Storyblocks
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Helium 10
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Jungle Scout
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check py-3"></i>{' '}
              Canva Pro
            </h1>
          </div>
          <div className="border w-full md:w-80 mx-auto flex flex-col items-center overflow-hidden mt-10 md:mt-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Semrush Guru
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">29</h1>
            </div>
            <h1 className=" font-bold pt-2 md:pt-5">Every Month</h1>
            <h1 className="pt-2 md:pt-5 font-light">
              Everything in Gold Plan + More
            </h1>
            <h1 className="pt-2 md:pt-6 font-light">1 day free trial</h1>
            <button className="border px-8 md:px-12 mt-4 md:mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 px-8 md:px-12 pt-6 font-light">
              Everything in Silver plan
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Semrush Gurru
            </h1>
          </div>
          <div className="border w-full md:w-80 mx-auto flex flex-col items-center overflow-hidden mt-10 md:mt-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Semrush Business
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">49</h1>
            </div>
            <h1 className=" font-bold pt-2 md:pt-5">Every Month</h1>
            <h1 className="pt-2 md:pt-5 font-light">
              Everything in Gold Plan + More
            </h1>
            <h1 className="pt-2 md:pt-6 font-light">1 day free trial</h1>
            <button className="border px-8 md:px-12 mt-4 md:mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 px-8 md:px-12 pt-6 font-light">
              Everything in Silver plan
            </h1>
            <h1 className="font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Semrush Business
            </h1>
          </div>
          <div className="border w-full md:w-80 mx-auto flex flex-col items-center overflow-hidden mt-10 md:mt-0"></div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="grid gap-x-8 grid-cols-1 md:grid-cols-3">
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Diamond plan
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">15</h1>
            </div>
            <h1 className=" font-bold pt-4">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              SpyFu
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden mt-10 md:mt-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Platinum plan
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">39</h1>
            </div>
            <h1 className=" font-bold pt-4">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              SERPStat
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden mt-10 md:mt-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Vista plan</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">59</h1>
            </div>
            <h1 className=" font-bold pt-4">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              MAJESTIC
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="border max-w-xs mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Woorank</h1>
            <div className="flex items-center justify-center">
              <span className="text-xl font-medium">$</span>
              <h1 className="text-6xl font-bold">5</h1>
            </div>
            <h1 className="text-lg">Every Month</h1>
            <h1 className="font-light pt-24 text-sm">1 day free trial</h1>
            <button className="mt-6 mb-5 py-3 px-12 bg-[#9e3ffd] text-white font-medium tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Wooran
            </h1>
          </div>
          <div className="border max-w-xs mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              SimilarWeb plan
            </h1>
            <div className="flex items-center justify-center">
              <span className="text-xl font-medium">$</span>
              <h1 className="text-6xl font-bold">10</h1>
            </div>
            <h1 className="text-lg">Every Month</h1>
            <h1 className="font-light pt-24 text-sm">1 day free trial</h1>
            <button className="mt-6 mb-5 py-3 px-12 bg-[#9e3ffd] text-white font-medium tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              SimilarWeb
            </h1>
          </div>
          <div className="border max-w-xs mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Kwfinder plan
            </h1>
            <div className="flex items-center justify-center">
              <span className="text-xl font-medium">$</span>
              <h1 className="text-6xl font-bold">7</h1>
            </div>
            <h1 className="text-lg">Every Month</h1>
            <h1 className="font-light pt-24 text-sm">1 day free trial</h1>
            <button className="mt-6 mb-5 py-3 px-12 bg-[#9e3ffd] text-white font-medium tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Kwfinder Premium
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Copy.ai</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold pb-6">9</h1>
            </div>
            <h1 className=" font-bold">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Copy ai
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Instatext
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold pb-6">5</h1>
            </div>
            <h1 className=" font-bold">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Instatext
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Quilbot</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold pb-6">7</h1>
            </div>
            <h1 className=" font-bold">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Quilbot
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="grid gap-x-8 grid-cols-1 md:grid-cols-3">
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Article Builder
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">4</h1>
            </div>
            <h1 className=" font-bold mt-5">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trail</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Article Builder
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              BuzzSumo
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">3</h1>
            </div>
            <h1 className=" font-bold mt-5">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trail</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              BuzzSumo
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Rytr</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">10</h1>
            </div>
            <h1 className=" font-bold mt-5">Every Month</h1>
            <h1 className="font-light pt-24">1 day free trail</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Rytr
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">ADSPY</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">7</h1>
            </div>
            <h1 className="font-bold mt-4">Every Month</h1>
            <h1 className=" font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              ADSPY
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">BigSpy</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">9</h1>
            </div>
            <h1 className="font-bold mt-4">Every Month</h1>
            <h1 className=" font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              BigSpy
            </h1>
          </div>
          <div className="border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Zik Analytics
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">17</h1>
            </div>
            <h1 className="font-bold mt-4">Every Month</h1>
            <h1 className=" font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Zik Analytics
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center border w-full overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Envato Elements
            </h1>
            <div className="flex">
              <span className="text-lg">$</span>
              <h1 className="text-6xl font-bold">5</h1>
            </div>
            <h1 className=" py-4 mt-2 font-medium">Every Month</h1>
            <h1 className="mt-auto font-light">1 day free trial</h1>
            <button className="mt-6 mb-5 px-12 py-3 text-white bg-[#9e3ffd] border border-[#9e3ffd] tracking-widest">
              Start Free Trial
            </button>
            <h1 className="w-full py-6 border-t-2 text-center font-light">
              <i className="px-3 fa-solid fa-circle-check fa-lg text-[#9e3ffd]"></i>{' '}
              Envato Elements
            </h1>
          </div>
          <div className="flex flex-col items-center border w-full overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Vistacreate</h1>
            <div className="flex">
              <span className="text-lg">$</span>
              <h1 className="text-6xl font-bold">17</h1>
            </div>
            <h1 className=" py-4 mt-2 font-medium">Every Month</h1>
            <h1 className="mt-auto font-light">1 day free trial</h1>
            <button className="mt-6 mb-5 px-12 py-3 text-white bg-[#9e3ffd] border border-[#9e3ffd] tracking-widest">
              Start Free Trial
            </button>
            <h1 className="w-full py-6 border-t-2 text-center font-light">
              <i className="px-3 fa-solid fa-circle-check fa-lg text-[#9e3ffd]"></i>{' '}
              Vistacreate
            </h1>
          </div>
          <div className="flex flex-col items-center border w-full overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Veed.io</h1>
            <div className="flex">
              <span className="text-lg">$</span>
              <h1 className="text-6xl font-bold">24</h1>
            </div>
            <h1 className=" py-4 mt-2 font-medium">Every Month</h1>
            <h1 className="mt-auto font-light">1 day free trial</h1>
            <button className="mt-6 mb-5 px-12 py-3 text-white bg-[#9e3ffd] border border-[#9e3ffd] tracking-widest">
              Start Free Trial
            </button>
            <h1 className="w-full py-6 border-t-2 text-center font-light">
              <i className="px-3 fa-solid fa-circle-check fa-lg text-[#9e3ffd]"></i>{' '}
              Veed.io
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid gap-x-8 grid-cols-1 md:grid-cols-3">
          <div className="border w-80 mx-auto flex flex-col items-center overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">Canva Pro</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">3</h1>
            </div>
            <h1 className=' pt-5'>Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              CanvaPro
            </h1>
          </div>
          <div className="border w-80 mx-auto flex flex-col items-center mt-8 md:mt-0 md:border-t md:border-b md:border-l-2 md:border-r-2  md:px-6 overflow-hidden">
            <h1 className="my-4 text-2xl font-bold tracking-widest">StoryBlocks</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">10</h1>
            </div>
            <h1 className=' pt-5'>Every Month</h1>
            <h1 className="font-light pt-24">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              StoryBlocks
            </h1>
          </div>
          <div className="border w-80 mx-auto flex flex-col items-center mt-8 md:mt-0">
            <h1 className="my-4 text-2xl font-bold tracking-widest">
              Diamond Plans
            </h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-6xl font-bold">5</h1>
            </div>
            <h1 className="pt-5">Every Month</h1>
            <h1 className="font-light pt-24">Free Plan</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Semrush
            </h1>
            <h1 className="w-full text-center py-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>
              Canva
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border w-80 mx-auto flex flex-col items-center overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            />
            <h1 className="my-4 text-2xl font-bold tracking-widest">GOLD PLAN</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-8xl font-extrabold">15</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className="pt-5 font-light">Everything in Gold Plan + More</h1>
            <h1 className="font-light pt-4">Valid until canceled</h1>
            <h1 className="font-light">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 px-12 pt-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Everything in Silver
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Majestic
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Moz Pro
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Buzzsumo
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Spyfu
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Woorank
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Spamzilla
            </h1>
          </div>
          <div className="border w-80 mx-auto flex flex-col items-center overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png/v1/fill/w_375,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png"
              alt="logo"
            />
            <h1 className="my-4 text-2xl font-bold tracking-widest">GOLD PLAN</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-8xl font-extrabold">29</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className="pt-5 font-light">Everything in Gold Plan + More</h1>
            <h1 className="font-light pt-4">Valid until canceled</h1>
            <h1 className="font-light">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 px-12 pt-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Everything in Silver
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Majestic
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Moz Pro
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Buzzsumo
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Spyfu
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Woorank
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Spamzilla
            </h1>
          </div>
          <div className="border w-80 mx-auto flex flex-col items-center overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png/v1/fill/w_363,h_193,fp_0.23_0.50,lg_1,q_85,enc_auto/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png"
              alt="logo"
            />
            <h1 className="my-4 text-2xl font-bold tracking-widest">GOLD PLAN</h1>
            <div className="flex">
              <pre>$</pre>
              <h1 className="text-8xl font-extrabold">80</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className="pt-5 font-light">Everything in Gold Plan + More</h1>
            <h1 className="font-light pt-4">Valid until canceled</h1>
            <h1 className="font-light">1 day free trial</h1>
            <button className="border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className="border-t-2 px-12 pt-6 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Everything in Silver
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Majestic
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Moz Pro
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Buzzsumo
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Spyfu
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Woorank
            </h1>
            <h1 className="pt-4 font-light">
              <i className="px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i>{' '}
              Spamzilla
            </h1>
          </div>
        </div>
      </div>

      <h1 className=" py-4 text-gray-500 flex items-center justify-center">
        © 2023 by SEO Expressed. Powered and secured by SEO Expressed Team
      </h1>
    </div>
  )
}

export default Plans