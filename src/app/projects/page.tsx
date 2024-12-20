import ProjectBox from "../component/project-section";
import pakWheels from "../../../public/pakWheels.png";
import panacloud from "../../../public/panacloud.png";
import resume from "../../../public/resume.png";
import "./projects.css"
const Projects = () => {
    let content = [{heading: "Pak Wheels", ImageName: pakWheels, projectDesc: "This is a user-friendly online application for buying and selling cars."}, {heading: "Panacloud", ImageName: panacloud, projectDesc: "Panacloud is an innovative and user-friendly app designed to empower users with advanced tools and resources for seamless cloud computing and software development."}, {heading: "Resume Builder", ImageName: resume, projectDesc: "A static resume is a fixed, non-interactive document that presents an individual's skills, experiences, and achievements in a straightforward format, typically as a PDF or printed file."}]
let atr = "Rayyan Naveed"

    return(
        <div id="project">
                <h1>Projects Change Into CSS</h1>
            <div id="project-div">
                {content.map((item) => (
                    <ProjectBox head={item.heading} image={item.ImageName} desc={item.projectDesc} alt={item.heading}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;