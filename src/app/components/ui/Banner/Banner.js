import Image from "next/image";
import  heroImg from "../../../../asset/hero1.png";
import  heroBgImg from "../../../../asset/doodles mixed round.svg";
import './Banner.css'
const Banner = () => {
    return (
      <div className="hero min-h-screen text-white bannerBgImg">
        <div className="flex gap-10 justify-between flex-col lg:flex-row-reverse">
          <div className="w-1/2 relative flex-1">
            <Image
              src={heroImg}
              className="object-cover"
              width={400}
              height={300}
              alt="hero image"
            />
          </div>

          <div className="w-1/2">
            <h1 className="text-8xl font-bold uppercase">
              fronted <span className="text-primary">developer</span>
            </h1>
            <p className="py-6">
              There wasnt a bird in the sky, but that was not what caught her
              attention. It was the clouds. The deep green that isn't the color
              of clouds, but came with these. She knew what was coming and she
              hoped she was prepared.
            </p>
            <button className="btn btn-md hover:bg-dark2 rounded-full text-white bg-primary me-2">
              Hire Me
            </button>
            <button className="btn btn-md rounded-full text-white bg-dark2">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5"
                  stroke="#EEEEEE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10.5L12 15.5L17 10.5"
                  stroke="#EEEEEE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.5V3.5"
                  stroke="#EEEEEE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};
export default Banner;