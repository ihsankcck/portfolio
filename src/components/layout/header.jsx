import * as React from "react"
import { NavLink } from "react-router-dom";
import Container from "../ui/container"
import Github from "/github.svg"
import Mail from "/mail.svg"
import Instagram from "/instagram.svg"
import Linkedin from "/linkedin.svg"

const Header = React.forwardRef(() => {
    return (

        <header className="sticky w-full top-0 z-50" >
            <Container >
                <div className="relative w-[100%] top-4 rounded-3xl  left-1/2 transform -translate-x-1/2 p-5 bg-white ">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a href="/">
                                <h3 className="font-raleway text-xl font-semibold text-blue-950">İhsan Küccük</h3>
                                <span className=" text-sm text-cyan-600">FRONT-END DEVELOPER</span>
                            </a>
                            <div className="flex items-center border-l-2 border-[#adadb1] pl-7 ml-7 gap-7">
                                <a href="https://github.com/ihsankcck" className="flex flex-col">
                                    <img className="h-9" src={Github} alt="ihsan küccük github" />
                                </a>
                                <a href="https://www.linkedin.com/in/ihsan-k%C3%BCcc%C3%BCk-655432277/" className="flex flex-col">
                                    <img className="h-11" src={Linkedin} alt="ihsan küccük linkedin" />
                                </a>
                                <a href="https://www.instagram.com/ihsankcck/" className="flex flex-col">
                                    <img className="h-11" src={Instagram} alt="ihsan küccük instagram" />
                                </a>
                                <a href="/" className="flex flex-col">
                                    <img className="h-9" src={Mail} alt="ihsan küccük e-mail" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <a href=""></a>
                            <NavLink className="navlink" to="deneme">Deneme</NavLink >
                            <NavLink className="navlink" to="deneme1">Deneme</NavLink >
                            <NavLink className="navlink" to="deneme2">Deneme</NavLink >
                            <NavLink className="navlink" to="deneme3">Deneme</NavLink >
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
})

Header.displayName = "Header"

export { Header }
