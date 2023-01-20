import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function DotGroup({selectedPage, setSelectedPage}){
    const selectedStyles = `relative bg-dark-brown before:absolute before:w-6 before:h-6  before:border-2 
    before:border-dark-brown before:left-[-50%] before:top-[-50%]`;
    return(
        <div className=" flex flex-col fixed gap-6 top-[40%] right-[2.125rem]">

        <AnchorLink className={`${selectedPage === "home" ? selectedStyles : "bg-dark-brown"} w-3 h-3  `}
        href={"#home"}
        onClick={() => setSelectedPage("home")} />

        <AnchorLink className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-brown"} w-3 h-3  `}
        href={"#skills"}
        onClick={() => setSelectedPage("skills")} />

        <AnchorLink className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-brown"} w-3 h-3  `}
        href={"#projects"}
        onClick={() => setSelectedPage("projects")} />

        <AnchorLink className={`${selectedPage === "testimonials" ? selectedStyles : "bg-dark-brown"} w-3 h-3 `}
        href={"#testimonials"}
        onClick={() => setSelectedPage("testimonials")} />

        <AnchorLink className={`${selectedPage === "contacts" ? selectedStyles : "bg-dark-brown"} w-3 h-3 `}
        href={"#contact"}
        onClick={() => setSelectedPage("contact")} />
        
        
        </div>
        
    )
}

export default DotGroup;