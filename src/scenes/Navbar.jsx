import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({page, selectedPage, setSelectedPage}) =>{
 const lowerCasePage = page.toLowerCase();
 return(
    <AnchorLink className={`${selectedPage === lowerCasePage ? "underline" : ""} hover:underline transition duration-500`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
 >
 {page}
 </AnchorLink>
 )
 

}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}) => {

   
    const [isMenuToggled, setIsMenuToggled] = React.useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navIsTopOfPage = isTopOfPage ? "" : "bg-brown transition duration-500";

    return(
        <nav className={`z-999 w-full top-0 py-7 bg-v-light-brown ${isTopOfPage ? "" : ""} text-dark-brown transition duration-500`}>
        

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? 
        (<div className={`flex justify-between w-5/6 mx-auto font-monospace text-md font-semibold `}>
        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    

    
        </div>

          ): (<div className="flex justify-around"> 
            <button className= {`bg-light-brown rounded-full ${isTopOfPage ? "" : "bg-v-light-brown"}`} onClick={()=> setIsMenuToggled(!isMenuToggled)}>oXo</button>
            </div>)}
        

        {/* MOBILE TOGGLE */}
        {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed bottom-0 left-0 h-full bg-v-light-brown transition duratiion-500 w-3/5">
            <div className="flex justify-end p-6">
              <button onClick={()=> setIsMenuToggled(!isMenuToggled)} className={`bg-light-brown rounded-full ${isTopOfPage ? "" : "bg-v-light-brown"}`}>XoX</button> 
            </div>
            <div className="flex flex-col font-monospace px-12 py-3 gap-16 font-semibold">
             <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
             <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
             <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
             <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
             <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>

            </div>
        )}

        </nav>
    )
}

export default Navbar;