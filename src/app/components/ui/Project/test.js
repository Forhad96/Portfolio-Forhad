<div className="grid grid-cols-3 gap-6">
  {[1, 2, 3].map((idx) => (
    <div key={idx} className=" antialiased">
      <div className="relative m-auto">
        <div className="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
          <div className="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">
            Project Name
          </div>
          <div className="flex">
            <button className="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Live
            </button>
            <button className="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
              Code
            </button>
          </div>
          <div className="my-2 mx-2 mr-5">
            <p className="text-gray-900 text-sm">
              A brief description of what the project is and what it does and
              technologies used.
            </p>
          </div>
          <div>
            <div className="font-semibold text-l text-gray-900">
              Tech Stack:
            </div>
            <div>
              <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                ReactJS
              </span>
              <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                Tailwind
              </span>
              <span className="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                Javascript
              </span>
            </div>
          </div>
        </div>
        <img
          className="absolute z-0 mx-72 -my-56 h-64 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
          src="https://camo.githubusercontent.com/78889a2ff752043bd00ea43b0dc9fb85b8818345e190b2af5ce4d4eff307db64/68747470733a2f2f692e696d6775722e636f6d2f645744334449522e6a7067"
        />
      </div>
    </div>
  ))}
</div>;
