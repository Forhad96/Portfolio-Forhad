import Image from "next/image";
import bookify from "@/asset/ProjectImg/bookifyRecent.png"
import autoVersa from "@/asset/ProjectImg/autoVersa/autoVarsaCard.png"
import gearGater from "@/asset/ProjectImg/gearGather/gearGatherCard.png"
const Project = () => {
    return (
      <div className="">
        <h1 className="text-6xl my-10 font-bold text-white">
          My recent <span className="text-primary">project</span>
        </h1>

        <div className="projectBg h-screen">
          {/* component */}
          <div className="grid grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="card glass h-[400px] shadow shadow-primary text-white"
              >
                <figure>
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full"
                    src={project.projectImg}
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.projectName}</h2>
                  <p className="h-10 overflow-hidden">{project.description}</p>
                  <div className="card-actions justify-end">
                    <a href={project.liveLink}>
                      <button className="btn btn-sm ring ring-primary border-none text-white btn-neutral">
                        Live
                      </button>
                    </a>
                    <a href={project.codeLink}>
                      <button className="btn btn-sm ring ring-primary border-none text-white btn-neutral">
                        Code
                      </button>
                    </a>
                    <a >

                    <button className="btn btn-sm ring ring-primary border-none text-white btn-neutral">
                      Details
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
export default Project;



const projects = [
  {
    projectName: "Bookify",
    projectImg:bookify,
    liveLink: "https://bookify007.web.app",
    codeLink: "https://github.com/Forhad96/Bookify11-client.git",
    description:
      "Welcome to Bookify, a hotel booking web application that allows to book hotel rooms online. Users can browse, filter, and select from a variety of rooms, view room details and reviews, and make",
  },
  {
    projectName: "Gear Gather",
    projectImg:gearGater,
    liveLink: "https://github.com/Forhad96/Gear-gather12-client.git",
    codeLink: "https://gear-gather07.web.app",
    description:
      "Gear Gather is a dynamic platform that empowers users to explore, contribute, and interact with a diverse array of products. Whether you're a user searching for the latest gear or an admin managing the platform, Gear Gather has you covered.",
  },
  {
    projectName: "Auto Versa",
    projectImg:autoVersa,
    liveLink: "https://github.com/Forhad96/Auto-versa-client10.git",
    codeLink: "https://auto-versa.web.app",
    description:
      "AutoVersa is a web application dedicated to car enthusiasts. It allows users to explore and purchase cars from various brands, manage their shopping carts, and enjoy a user-friendly night mode feature. This README provides an overview of the project, its technologies, and its key features.",
  },
];