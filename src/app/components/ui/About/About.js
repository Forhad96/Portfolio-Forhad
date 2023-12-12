import Image from "next/image";
import aboutImg from "../../../../asset/aboutImg.png";
import aboutBgImg from "../../../../asset/aboutBg.svg";
// import "./Banner.css";
const About = () => {
  return (
    <div className="hero min-h-screen text-white aboutBgImg">
      <div className="grid  md:grid-cols-4">
        <div className="col-span-2 order-2 md:order-first">
          <h1 className="text-6xl font-bold uppercase">
            About <span className="text-primary">me</span>
          </h1>
          <p className="py-6">
            There wasn't a bird in the sky, but that was not what caught her
            attention. It was the clouds. The deep green that isn't the color of
            clouds, but came with these. She knew what was coming and she hoped
            she was prepared.
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Image
            src={aboutImg}
            className="object-cover"
            width={400}
            height={300}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
