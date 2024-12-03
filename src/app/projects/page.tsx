"use client"
import ProjectBox from "../component/project-section";
import rayyan from "../../../public/Honda_City.jpg";
const Projects = () => {
    let heading = "ProjectName"
let imageName = rayyan
let atr = "Rayyan Naveed"

    return(
        <div className="" id="project">
                <h1 className="text-4xl font-bold text-center">Projects Change Into CSS</h1>
            <div className="flex flex-col gap-5 ">
                <ProjectBox head={heading} image={imageName} alt={atr}/>
                <ProjectBox head={heading} image={imageName} alt={atr}/>
            </div>
        </div>
    )
}

export default Projects;