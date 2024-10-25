import LandingImg from "/src/assets/images/landing-img.png";
const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[300px] relative z-20">
          <div className="w-[750px] max-w-full">
            <img
              src={LandingImg}
              alt="landing-img"
              className="w-full h-fit object-contain"
            />
          </div>
          <div className="text-center my-[30] text-white">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-slate-300 text-[15px] px-[15px] md:w-[500px] md:mx-auto mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
              nulla impedit commodi.
            </p>
          </div>
          <a
            href="/register"
            className="btn capitalize w-[280px] h-[60px] rounded-[30px] element-center mx-auto text-white font-medium"
          >
            get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
