import Image from "next/image";
import bookify from '../../../../asset/ProjectImg/bookifyRecent.png'
const Project = () => {
    return (
      <div className="projectBg h-screen">
        <h1 className="text-6xl font-bold text-white uppercase">
          My Recent Project
        </h1>

        {/* component */}
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="card glass h-[400px] text-white">
              <figure>
                <Image
                  width={300}
                  height={300}
                  className="w-full h-full"
                  src={bookify}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>
                  How to park your car at your garage?
                  loremdfdfldjfldjfjdfjdslfjdlsjgdsjg
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm border-none text-white btn-neutral">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};
export default Project;