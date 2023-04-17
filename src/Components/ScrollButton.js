function ScrollButton() {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  
    return (
      <>
        <button
          className=" z-6  text-white mb-14 font-bold py-2 px-4 rounded fixed bottom-4 right-4 shadow-md lg:bottom-8 lg:right-8"
          onClick={scrollToTop}
        >
          <img
            className=" w-10"
            src="https://thumbs.dreamstime.com/z/up-arrow-icon-flat-black-round-button-vector-illustration-design-isolated-142988552.jpg"
            alt="logo"
          />
        </button>
      </>
    )
  }
  
  export default ScrollButton