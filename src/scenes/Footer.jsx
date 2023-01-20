import SocialMediaIcons from "../components/SocialMediaIcons";

function Footer(){
    return (
        <footer className="h-64 w-5/6 mx-auto py-8">
        <div className="flex md:justify-start justify-center text-dark-brown"><SocialMediaIcons /></div>
        <div className="flex flex-col md:flex-row justify-center items-bottom md:justify-between text-center">
            <p className="font-monospace text-2xl font-semibold text-brown">Don Marco</p>
            <p className="font-monospace text-md text-brown">©2023 DON. All Rights Reserved.</p>
        </div>
    
        

        </footer>
    )
}

export default Footer;