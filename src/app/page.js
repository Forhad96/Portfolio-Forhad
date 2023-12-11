
import About from "./components/ui/About/About";
import Banner from "./components/ui/Banner/Banner";
import Project from "./components/ui/Project/Project";

// import Banner from '../app/components/ui/Banner'
export default function Home() {
  return (
<div className="max-w-7xl mx-auto">
<Banner></Banner>
<About></About>
<Project></Project>
{/* <Footer></Footer> */}
</div>
  )
}
