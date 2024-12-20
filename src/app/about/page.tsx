import Image from "next/image"
import rayyan from "../../../public/rayyan.png";
import "./about.css"
const About = () => {
    return(
        <div>
            <section id="about-cont">
                <div id="about-left">
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium reprehenderit deleniti repellat ipsum.</p>
                    <button id="about-btn">Resume</button>
                </div>
                <div id="about-right">
                <Image id="about-img" className=""  src={rayyan} alt="RayyanNaveed" ></Image>
                </div>
            </section>
        </div>
    )
}

export default About;