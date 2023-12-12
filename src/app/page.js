
import About from "./components/ui/About/About";
import Banner from "./components/ui/Banner/Banner";
import Contact from "./components/ui/Contact/Contact";
import Project from "./components/ui/Project/Project";
import Skills from "./components/ui/Skills/Skills";

// import Banner from '../app/components/ui/Banner'
export default function Home() {
  return (
<div className="max-w-7xl mx-auto">
<Banner></Banner>
<About></About>
<Skills></Skills>
<Project></Project>
<Contact></Contact>
</div>
  )
}
