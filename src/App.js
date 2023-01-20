

import React from 'react';
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import MyProjects from "./scenes/MyProjects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from './scenes/Footer';

function App() {
  const [selectedPage, setSelectedPage] = React.useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [isTopOfPage, setIsTopOfPage] = React.useState(true);

  React.useEffect(()=>{
    function handleScroll(){
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !==0) setIsTopOfPage(false);
    }
    
    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    
    <div>
    <div className="z-[999]">
    <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

    </div>
    
    <div className="w-5/6 mx-auto md:h-full">
       {isAboveMediumScreens && (
        <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
       )}

       <Landing setSelectedPage={setSelectedPage} />
    </div>

    <div className="bg-lbrown">
    <MySkills />
    </div>

    <div className="w-5/6 mx-auto">
    <MyProjects />
    </div>

    <div className="md:h-full bg-lbrown">
    <Testimonials />
    </div>

    <div className="w-5/6 mx-auto md:h-full">
    <Contact />
    </div>

    <div className="bg-lbrown">
    <Footer />
    </div>

    

    
      
    </div>
  );
}

export default App;
