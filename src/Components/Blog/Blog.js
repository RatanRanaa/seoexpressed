import React from 'react'

const Blog = () => {
  return (
    <div className=" ">
      <div className="sm:ml-0 md:ml-20 lg:ml-60 sm:mt-10 md:mt-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          All Posts
        </h1>
      </div>

      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border">
              <img
                className="h-full w-full object-cover"
                src="https://static.wixstatic.com/media/nsplsh_197bdb827dd74f9585db55f630f4925d~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/nsplsh_197bdb827dd74f9585db55f630f4925d~mv2.jpg"
                alt="logo"
              />
            </div>
            <div className="border pl-4 sm:pl-6">
              <h1 className="font-light">
                {' '}
                Prabhanjay Tiwari <i className="fa-solid fa-graduation-cap"></i>
              </h1>
              <h1 className="font-light mt-1">Mar 25 . 3Min</h1>
              <h1 className="font-bold text-2xl sm:text-3xl leading-relaxed mt-2">
                <a href="a">
                  How SEO Expressed will help you to be more creative in your
                  online journey ?
                </a>
                <br />
              </h1>
              <h1 className="pt-2 sm:pt-5 font-normal leading-relaxed border-b-2 pb-2 sm:pb-5 tracking-tight">
                <a href="a">
                  SEO Expressed is a group buy website that provides access to a
                  wide range of SEO tools and other creative software ata an
                  affardable
                </a>
              </h1>
              <div class="mt-2 sm:mt-4">
                <h1 class="font-light">
                  3 Views <span class="ml-4 sm:ml-6">0 comments</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-10 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border">
              <img
                className="w-full h-full object-cover"
                src="https://static.wixstatic.com/media/nsplsh_e7d94f27b63f4ff7acbe5d66b85f4fe5~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/nsplsh_e7d94f27b63f4ff7acbe5d66b85f4fe5~mv2.jpg"
                alt="logo"
              />
            </div>
            <div className="border pl-4 md:pl-14">
              <h1 className="font-light">
                Prabhanjay Tiwari <i className="fa-solid fa-graduation-cap"></i>
              </h1>
              <h1 className="font-light">Mar 25 . 3Min</h1>
              <h1 className="font-bold text-3xl leading-relaxed">
                <a href="a">
                  How SEO Expressed will help you to be more creative in your
                  online journey ?
                </a>
              </h1>
              <h1 className="pt-5 font-normal leading-relaxed border-b-2 pb-5 tracking-tight">
                <a href="a">
                  SEO Expressed is a group buy website that provides access to a
                  wide range of SEO tools and other creative software ata an
                  affardable
                </a>
              </h1>
              <div>
                <h1 className="font-light mt-4">
                  3 Views<span className="ml-4">0 Comments</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" flex items-center justify-center mt-10 pb-2">
        © 2023 by SEO Expressed. Powered and secured by SEO Expressed Team.
      </h1>
    </div>
  )
}

export default Blog